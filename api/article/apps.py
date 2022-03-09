from django.apps import AppConfig


class ArticleConfig(AppConfig):
    """
    A Django application and configuration for the Article app.

    The ``ready`` method is for the custom signals to be used.
    """

    default_auto_field = "django.db.models.BigAutoField"
    name = "article"

    def ready(self):
        import article.signals
