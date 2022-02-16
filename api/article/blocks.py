from wagtail.core.blocks import (
    CharBlock,
    StructBlock,
)
from wagtail.images.blocks import ImageChooserBlock


class ImageWithCaptionBlock(StructBlock):
    """
    A Wagtail block for a fixed group of sub-blocks for the fields of
    ``image`` and ``caption``.
    """

    image = ImageChooserBlock()
    caption = CharBlock()
