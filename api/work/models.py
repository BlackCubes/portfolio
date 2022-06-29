from django import forms
from django.db import models
from django.utils import timezone

from core.utils import unique_slug_generator

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

from .blocks import ImageWithCaptionBlock
from .fields import (
    WorkBodySerializedField,
    WorkCategorySerializedField,
    WorkLogoImageSerializedField,
    WorkMainImageSerializedField,
)


@register_snippet
class WorkCategory(models.Model):
    """
    A standard Django model with fields of ``uuid`` and ``name``.

    Used for editing on the admin panel, and to add categories to a work.

    NOTE:

    This is used the same as ``ArticleCategory``, and instead of combining
    both into one, I am keeping them separate so that this category is only
    concerned about ``work`` while the other is concerned about ``category``.
    """

    uuid = models.UUIDField(unique=True, default=uuid4, editable=False)
    name = models.CharField(max_length=255)

    panels = [
        FieldPanel("name"),
    ]

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "work categories"


class WorkPage(Page):
    """
    A Wagtail model to create content for work.

    The fields that will be shown in the admin page (``content_panels``) for
    creating/updating work are ``description``, ``main_image``,
    ``first_released_at``, ``category``, and ``body``.

    A streamfield is used for the ``body`` field with inner fields of
    ``paragraph``, ``image_with_caption``, and ``block_quote``.

    The fields that will be shown for the API are the same as
    ``content_panels`` with an extra field of ``uuid``.
    """

    uuid = models.UUIDField(unique=True, default=uuid4, editable=False)
    description = models.CharField(max_length=200)
    main_image = models.ForeignKey(
        "wagtailimages.Image",
        blank=True,
        null=True,
        on_delete=models.SET_NULL,
        related_name="main_image",
    )
    logo_image = models.ForeignKey(
        "wagtailimages.Image",
        blank=True,
        null=True,
        on_delete=models.SET_NULL,
        related_name="logo_image",
    )
    company = models.CharField(max_length=100, blank=True, null=True)
    first_released_at = models.DateTimeField(default=timezone.now)
    work_url = models.URLField(
        blank=True,
        null=True,
        help_text="Preferably use the released website. If not, use a GitHub link, if possible.",
    )
    show_to_public = models.BooleanField(
        default=True,
        help_text="If you want to show to the public on your personal portfolio website.",
    )
    category = models.ForeignKey(
        "work.WorkCategory", null=True, on_delete=models.SET_NULL
    )
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
        ]
    )

    content_panels = Page.content_panels + [
        FieldPanel("description"),
        MultiFieldPanel(
            [
                ImageChooserPanel("main_image"),
                ImageChooserPanel("logo_image"),
            ],
            heading="Work/Personal images",
        ),
        MultiFieldPanel(
            [
                FieldPanel("company"),
                FieldPanel("work_url"),
                FieldPanel("first_released_at"),
                FieldPanel("show_to_public"),
                FieldPanel("category", widget=forms.RadioSelect),
            ],
            heading="Work/Personal information",
        ),
        StreamFieldPanel("body"),
    ]

    api_fields = [
        APIField("uuid"),
        APIField("description"),
        APIField("main_image", serializer=WorkMainImageSerializedField()),
        APIField("logo_image", serializer=WorkLogoImageSerializedField()),
        APIField("company"),
        APIField("work_url"),
        APIField("show_to_public"),
        APIField("first_released_at"),
        APIField("category", serializer=WorkCategorySerializedField()),
        APIField("body", serializer=WorkBodySerializedField()),
    ]


def clean(self):
    """
    A custom function to override the ``WagtailAdminModelForm`` ``clean``
    function so that the ``slug`` field could be created uniquely if it exists
    in the DB.
    """

    cleaned_data = super(WagtailAdminModelForm, self).clean()

    if isinstance(self.instance, WorkPage):
        title = cleaned_data.get("title", None)
        slug = cleaned_data.get("slug", None)

        if title and not slug:
            cleaned_data["slug"] = unique_slug_generator(
                instance=self.instance, new_slug=slug
            )

    return cleaned_data


def full_clean(self, *args, **kwargs):
    """
    A custom function to override the ``WagtailAdminModelForm`` ``full_clean``
    function so that the empty ``slug`` field could be created uniquely if it
    exists in the DB.

    This function works if a ``slug`` is not provided, and it removes any
    potential errors from the field given from Wagtail since a unique ``slug``
    would be generated in the end.

    NOTE:

    Strangely enough, the custom ``clean`` function above works when creating
    a new work as it autogenerates the unique ``slug`` without any errors. It
    also works when updating a work when there is a non-empty ``slug``.

    Yet, the custom ``clean`` function breaks apart with errors from Wagtail
    when updating a work with an empty ``slug`` even though it autogenerates.
    This is where this custom function comes into play.
    """
    super(WagtailAdminModelForm, self).full_clean(*args, **kwargs)

    if isinstance(self.instance, WorkPage):
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
