from wagtail.core.blocks import (
    CharBlock,
    StructBlock,
)
from wagtail.images.blocks import ImageChooserBlock


class ImageWithCaptionBlock(StructBlock):
    """"""

    image = ImageChooserBlock(required=False)
    caption = CharBlock(required=False)
