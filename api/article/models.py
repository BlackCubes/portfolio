from django.db import models

from wagtail.admin.edit_handlers import FieldPanel, StreamFieldPanel
from wagtail.core import blocks
from wagtail.core.fields import StreamField
from wagtail.core.models import Page
from wagtail.images.edit_handlers import ImageChooserPanel
from wagtail.images.blocks import ImageChooserBlock

from wagtailcodeblock.blocks import CodeBlock


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
        StreamFieldPanel("body"),
    ]
