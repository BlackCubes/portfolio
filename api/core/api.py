from wagtail.api.v2.router import WagtailAPIRouter
from wagtail.documents.api.v2.views import DocumentsAPIViewSet
from wagtail.images.api.v2.views import ImagesAPIViewSet

from .endpoints import (
    ArticleCategoriesAPIEndpoint,
    TagsAPIEndpoint,
    WorkCategoriesAPIEndpoint,
)
from .views import PagesAPIViewSet


api_router = WagtailAPIRouter("wagtailapi")

api_router.register_endpoint("pages", PagesAPIViewSet)
api_router.register_endpoint("images", ImagesAPIViewSet)
api_router.register_endpoint("documents", DocumentsAPIViewSet)
api_router.register_endpoint(
    "article-categories", ArticleCategoriesAPIEndpoint
)
api_router.register_endpoint("tags", TagsAPIEndpoint)
api_router.register_endpoint("work-categories", WorkCategoriesAPIEndpoint)
