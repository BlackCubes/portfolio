from article.models import (
    ArticleCategory,
    Tag,
)

from wagtail.api.v2.views import BaseAPIViewSet

from work.models import WorkCategory


class ArticleCategoriesAPIEndpoint(BaseAPIViewSet):
    """
    Creates an API endpoint for categories in article.
    """

    model = ArticleCategory

    body_fields = BaseAPIViewSet.body_fields + [
        "uuid",
        "name",
    ]

    listing_default_fields = BaseAPIViewSet.listing_default_fields + [
        "uuid",
        "name",
    ]


class WorkCategoriesAPIEndpoint(BaseAPIViewSet):
    """
    Creates an API endpoint for categories in work.
    """

    model = WorkCategory

    body_fields = BaseAPIViewSet.body_fields + [
        "uuid",
        "name",
    ]

    listing_default_fields = BaseAPIViewSet.listing_default_fields + [
        "uuid",
        "name",
    ]


class TagsAPIEndpoint(BaseAPIViewSet):
    """
    Creates an API endpoint for tags.
    """

    model = Tag

    body_fields = BaseAPIViewSet.body_fields + [
        "name",
        "slug",
    ]

    listing_default_fields = BaseAPIViewSet.listing_default_fields + [
        "name",
        "slug",
    ]
