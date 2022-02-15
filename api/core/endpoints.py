from article.models import ArticleCategory

from wagtail.api.v2.views import BaseAPIViewSet


class CategoriesSnippetModelAPIEndpoint(BaseAPIViewSet):
    """"""

    model = ArticleCategory

    body_fields = BaseAPIViewSet.body_fields + [
        "uuid",
        "name",
    ]

    listing_default_fields = BaseAPIViewSet.listing_default_fields + [
        "uuid",
        "name",
    ]
