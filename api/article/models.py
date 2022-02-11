from django.db import models

from wagtail.admin.edit_handlers import FieldPanel, StreamFieldPanel
from wagtail.core import blocks
from wagtail.core.fields import StreamField
from wagtail.core.models import Page
from wagtail.images.blocks import ImageChooserBlock


class ImageWithCaptionBlock(blocks.StructBlock):
    """"""

    image = ImageChooserBlock()
    caption = blocks.CharBlock()


class ArticlePage(Page):
    """"""

    description = models.CharField(max_length=100)
    body = StreamField(
        [
            ("paragraph", blocks.RichTextBlock()),
            ("image_with_caption", ImageWithCaptionBlock()),
        ]
    )

    content_panels = Page.content_panels + [
        FieldPanel("description"),
        StreamFieldPanel("body"),
    ]
