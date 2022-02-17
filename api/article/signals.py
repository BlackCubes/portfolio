from django.db.models.signals import pre_save
from django.dispatch import receiver

from .models import ArticlePage


@receiver(pre_save, sender=ArticlePage)
def create_reading_time(sender, instance, **kwargs):
    """
    Creates a new reading time in seconds to the ``reading_time`` field.

    Adds each second based on the character length. For inline images, according
    to Medium, they add in 12 seconds and thus this function does the same.

    NOTE:

    Only updates/saves the field when publishing.
    """
    article = instance

    if article:
        article_body = article.body
        total_article_character_length = 0

        if article.title:
            total_article_character_length += len(article.title)

        if article.description:
            total_article_character_length += len(article.description)

        for stream_item in article_body:
            if stream_item.block.name == "paragraph":
                total_article_character_length += len(
                    stream_item.block.get_api_representation(stream_item.value)
                )

            if stream_item.block.name == "image_with_caption":
                if (
                    "caption" in stream_item.value
                    and stream_item.value["caption"] is not None
                ):
                    total_article_character_length += len(stream_item.value["caption"])

                if (
                    "image" in stream_item.value
                    and stream_item.value["image"] is not None
                ):
                    total_article_character_length += 12

            if stream_item.block.name == "code":
                if (
                    "code" in stream_item.value
                    and stream_item.value["code"] is not None
                ):
                    total_article_character_length += len(stream_item.value["code"])

            if stream_item.block.name in (
                "block_quote",
                "equation",
            ):
                total_article_character_length += len(stream_item.value)

        article.reading_time = total_article_character_length
