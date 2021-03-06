# Generated by Django 4.0.2 on 2022-02-11 05:24

from django.db import migrations
import wagtail.core.blocks
import wagtail.core.fields
import wagtail.images.blocks


class Migration(migrations.Migration):

    dependencies = [
        ("article", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="articlepage",
            name="body",
            field=wagtail.core.fields.StreamField(
                [
                    ("paragraph", wagtail.core.blocks.RichTextBlock()),
                    (
                        "image_with_caption",
                        wagtail.core.blocks.StructBlock(
                            [
                                (
                                    "image",
                                    wagtail.images.blocks.ImageChooserBlock(),
                                ),
                                ("caption", wagtail.core.blocks.CharBlock()),
                            ]
                        ),
                    ),
                    ("block_quote", wagtail.core.blocks.BlockQuoteBlock()),
                ]
            ),
        ),
    ]
