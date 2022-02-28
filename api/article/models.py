from django import forms
from django.db import models

from core.panels import ReadOnlyPanel
from core.utils import unique_slug_generator

from modelcluster.contrib.taggit import ClusterTaggableManager
from modelcluster.fields import (
    ParentalKey,
    ParentalManyToManyField,
)

from taggit.models import (
    Tag as TaggitTag,
    TaggedItemBase,
)

from uuid import uuid4

from wagtail.admin.edit_handlers import (
    FieldPanel,
    MultiFieldPanel,
    StreamFieldPanel,
)
from wagtail.admin.forms.models import WagtailAdminModelForm
from wagtail.api import APIField
from wagtail.core.blocks import (
    BlockQuoteBlock,
    RichTextBlock,
)
from wagtail.core.fields import StreamField
from wagtail.core.models import Page
from wagtail.images.edit_handlers import ImageChooserPanel
from wagtail.snippets.models import register_snippet

from wagtailcodeblock.blocks import CodeBlock

from wagtailmath.blocks import MathBlock

from .blocks import ImageWithCaptionBlock
from .fields import (
    ArticleBlockSerializedField,
    ArticleCategorySerializedField,
    ArticleHeaderImageSerializedField,
    ArticleTagSerializedField,
)


@register_snippet
class Tag(TaggitTag):
    """
    A proxy model subclassing the ``TaggitTag`` model for editing on the admin
    panel, and also to create an API endpoint (located at ``core.endpoints`` and
    ``core.api``).

    NOTE:

    The class below ``ArticlePageTag`` could have worked, but it is a lot more
    work whereas this is pretty simple to setup especially for the API endpoint.
    """

    class Meta:
        proxy = True


class ArticlePageTag(TaggedItemBase):
    """
    A class inheriting the taggit model to add tags to an article.
    """

    content_object = ParentalKey(
        "ArticlePage", related_name="tagged_items", on_delete=models.CASCADE
    )


@register_snippet
class ArticleCategory(models.Model):
    """
    A standard Django model with fields of ``uuid`` and ``name``.

    Used for editing on the admin panel, and to add categories to an article.
    """

    uuid = models.UUIDField(unique=True, default=uuid4, editable=False)
    name = models.CharField(max_length=255)

    panels = [
        FieldPanel("name"),
    ]

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "article categories"


class ArticlePage(Page):
    """
    A Wagtail model to create content for an article.

    The fields that will be shown in the admin page (``content_panels``) for
    creating/updating an article are ``description``, ``header_image``, ``tags``,
    ``categories``, ``reading_time``, ``uuid``, and ``body``.

    A streamfield is used for the ``body`` field with inner fields of ``paragraph``,
    ``image_with_caption``, ``block_quote``, ``code``, and ``equation``.

    The fields that will be shown for the API are the same as ``content_panels``
    with an extra field of ``uuid``.
    """

    uuid = models.UUIDField(unique=True, default=uuid4, editable=False)
    description = models.CharField(max_length=100)
    header_image = models.ForeignKey(
        "wagtailimages.Image", blank=True, null=True, on_delete=models.SET_NULL
    )
    tags = ClusterTaggableManager(through=ArticlePageTag, blank=True)
    category = models.ForeignKey(
        "article.ArticleCategory", required=True, null=True, on_delete=models.SET_NULL
    )
    reading_time = models.FloatField(default=0.0)
    body = StreamField(
        [
            (
                "paragraph",
                RichTextBlock(
                    features=[
                        "h1",
                        "h2",
                        "h3",
                        "h4",
                        "h5",
                        "h6",
                        "bold",
                        "italic",
                        "ol",
                        "ul",
                        "hr",
                        "link",
                        "embed",
                        "code",
                        "superscript",
                        "subscript",
                        "strikethrough",
                    ]
                ),
            ),
            ("image_with_caption", ImageWithCaptionBlock()),
            ("block_quote", BlockQuoteBlock()),
            ("code", CodeBlock(label="Code")),
            ("equation", MathBlock()),
        ]
    )

    content_panels = Page.content_panels + [
        FieldPanel("description"),
        ImageChooserPanel("header_image"),
        MultiFieldPanel(
            [
                FieldPanel("tags"),
                FieldPanel("categories", widget=forms.RadioSelect),
            ],
            heading="Article information",
        ),
        StreamFieldPanel("body"),
    ]

    promote_panels = Page.promote_panels + [
        MultiFieldPanel(
            [
                ReadOnlyPanel(
                    "reading_time",
                    heading="Time (in seconds)",
                ),
            ],
            heading="For article reading time (updates when publishing)",
        ),
    ]

    api_fields = [
        APIField("uuid"),
        APIField("description"),
        APIField("header_image", serializer=ArticleHeaderImageSerializedField()),
        APIField("tags", serializer=ArticleTagSerializedField()),
        APIField("categories", serializer=ArticleCategorySerializedField()),
        APIField("reading_time"),
        APIField("body", serializer=ArticleBlockSerializedField()),
    ]


def clean(self):
    """
    A custom function to override the ``WagtailAdminModelForm`` ``clean`` function so that
    the ``slug`` field could be created uniquely if it exists in the DB.
    """

    cleaned_data = super(WagtailAdminModelForm, self).clean()

    if isinstance(self.instance, ArticlePage):
        title = cleaned_data.get("title", None)
        slug = cleaned_data.get("slug", None)

        if title:
            cleaned_data["slug"] = unique_slug_generator(
                instance=self.instance, new_slug=slug
            )

    return cleaned_data


def full_clean(self, *args, **kwargs):
    """
    A custom function to override the ``WagtailAdminModelForm`` ``full_clean`` function so
    that the empty ``slug`` field could be created uniquely if it exists in the DB.

    This function works if a ``slug`` is not provided, and it removes any potential errors
    from the field given from Wagtail since a unique ``slug`` would be generated in the end.

    NOTE:

    Strangely enough, the custom ``clean`` function above works when creating a new article
    as it autogenerates the unique ``slug`` without any errors. It also works when updating
    an article when there is a non-empty ``slug``.

    Yet, the custom ``clean`` function breaks apart with errors from Wagtail when updating
    an article with an empty ``slug`` even though it autogenerates. This is where this
    custom function comes into play.
    """
    super(WagtailAdminModelForm, self).full_clean(*args, **kwargs)

    if isinstance(self.instance, ArticlePage):
        if self.data:
            title = None if not self.data["title"] else self.data["title"]
            slug = None if not self.data["slug"] else self.data["slug"]

            if title and not slug:
                # Remember old state
                _mutable = self.data._mutable

                # Set to mutable
                self.data._mutable = True

                self.data["slug"] = unique_slug_generator(
                    instance=self.instance, new_slug=slug
                )

                # Set mutable flag back
                self.data._mutable = _mutable

                if "slug" in self.errors:
                    del self.errors["slug"]


WagtailAdminModelForm.clean = clean
WagtailAdminModelForm.full_clean = full_clean
