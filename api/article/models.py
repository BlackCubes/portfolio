from django import forms
from django.db import models

from core.utils import unique_slug_generator

from modelcluster.contrib.taggit import ClusterTaggableManager
from modelcluster.fields import ParentalKey, ParentalManyToManyField

from taggit.models import TaggedItemBase

from wagtail.admin.edit_handlers import FieldPanel, StreamFieldPanel, MultiFieldPanel
from wagtail.core import blocks
from wagtail.core.fields import StreamField
from wagtail.core.models import Page
from wagtail.admin.forms.models import WagtailAdminModelForm
from wagtail.images.edit_handlers import ImageChooserPanel
from wagtail.images.blocks import ImageChooserBlock
from wagtail.snippets.models import register_snippet

from wagtailcodeblock.blocks import CodeBlock


class ArticlePageTag(TaggedItemBase):
    """"""

    content_object = ParentalKey(
        "ArticlePage", related_name="tagged_items", on_delete=models.CASCADE
    )


@register_snippet
class ArticleCategory(models.Model):
    """"""

    name = models.CharField(max_length=255)

    panels = [
        FieldPanel("name"),
    ]

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "article categories"


class ImageWithCaptionBlock(blocks.StructBlock):
    """"""

    image = ImageChooserBlock(required=False)
    caption = blocks.CharBlock(required=False)


class ArticlePage(Page):
    """"""

    description = models.CharField(max_length=100)
    header_image = models.ForeignKey(
        "wagtailimages.Image", blank=True, null=True, on_delete=models.SET_NULL
    )
    tags = ClusterTaggableManager(through=ArticlePageTag, blank=True)
    categories = ParentalManyToManyField("article.ArticleCategory", blank=True)
    body = StreamField(
        [
            (
                "paragraph",
                blocks.RichTextBlock(
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
                        "document-link",
                        "image",
                        "embed",
                        "code",
                        "superscript",
                        "subscript",
                        "strikethrough",
                        "blockquote",
                    ]
                ),
            ),
            ("image_with_caption", ImageWithCaptionBlock()),
            ("block_quote", blocks.BlockQuoteBlock(required=False)),
            ("code", CodeBlock(label="Code")),
        ]
    )

    content_panels = Page.content_panels + [
        FieldPanel("description"),
        ImageChooserPanel("header_image"),
        MultiFieldPanel(
            [
                FieldPanel("tags"),
                FieldPanel("categories", widget=forms.CheckboxSelectMultiple),
            ],
            heading="Article information",
        ),
        StreamFieldPanel("body"),
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


WagtailAdminModelForm.clean = clean
