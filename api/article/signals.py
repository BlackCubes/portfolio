from django.db.models.signals import pre_save
from django.dispatch import receiver

from .models import ArticlePage


@receiver(pre_save, sender=ArticlePage)
def create_reading_time(sender, instance, **kwargs):
    """
    Creates a new reading time in seconds to the ``reading_time`` field.

    Adds each character length for the total character length in the article.
    For inline images, according to Medium, they add in 12 seconds. Once the
    total character length is done, this gets calculated with the average
    characters per minute an average adult reads to get minutes which is
    converted into seconds which is added with the other seconds from inline
    images to get the final reading time.

    NOTE:

    Only updates/saves the field when publishing.
    """
    article = instance

    if article:
        article_body = article.body
        total_article_character_length = 0
        # Accoring to Medium, every inline image would add 12 seconds
        inline_image_seconds = 0

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
                    inline_image_seconds += 12

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

        # According to https://iovs.arvojournals.org/article.aspx?articleid=2166061
        character_to_word_ratio = 664.5 / 153.5

        # Average reading speed is 238 wpm according to
        # https://digest.bps.org.uk/2019/06/13/most-comprehensive-review-to-date-suggests-the-average-persons-reading-speed-is-slower-than-commonly-thought/
        average_reading_speed_wpm = 238

        # Convert wpm to cpm (characters per minute) since `total_article_character_length`
        # is in characters
        average_reading_speed_cpm = average_reading_speed_wpm * character_to_word_ratio

        total_time_seconds = (
            total_article_character_length / average_reading_speed_cpm * 60
        ) + inline_image_seconds

        article.reading_time = total_time_seconds
