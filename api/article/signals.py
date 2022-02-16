from django.db.models.signals import pre_save
from django.dispatch import receiver

from .models import ArticlePage


@receiver(pre_save, sender=ArticlePage)
def create_reading_time(sender, instance, **kwargs):
    """
    Creates a new reading time in seconds to the ``reading_time`` field.
    """
    article = instance
    print(article)
