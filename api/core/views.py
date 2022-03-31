from django.urls import path

from wagtail.api.v2.views import PagesAPIViewSet as BasePagesAPIViewSet

from .backends import FieldsInFilter


class PagesAPIViewSet(BasePagesAPIViewSet):
    """
    A custom view on Wagtail's ``PagesAPIViewSet`` to support query filtering
    for ``tags``, and it also supports both the primary key and slug for the
    URL parameter.
    """

    filter_backends = [FieldsInFilter] + BasePagesAPIViewSet.filter_backends

    def check_query_parameters(self, queryset):
        all_query_params = self.request.GET.copy()

        # Remove all params supported by FieldsInFilter.
        unvalidated_query_params = all_query_params.copy()

        for param in FieldsInFilter.tag_params(self, queryset.model):
            unvalidated_query_params.pop(param, None)

        # Temporarily overwrites self.request.GET with the remaining,
        # unvalidated, query params and let super() validate the rest.
        self.request.GET = unvalidated_query_params

        super().check_query_parameters(queryset)

        # Restore the original set of query params
        self.request.GET = all_query_params

    def detail_view(self, request, pk=None, slug=None):
        param = pk

        if slug is not None:
            self.lookup_field = "slug"
            param = slug

        return super().detail_view(request, param)

    @classmethod
    def get_urlpatterns(cls):
        return [
            path("", cls.as_view({"get": "listing_view"}), name="listing"),
            path(
                "<int:pk>/", cls.as_view({"get": "detail_view"}), name="detail"
            ),
            path(
                "<slug:slug>/",
                cls.as_view({"get": "detail_view"}),
                name="detail",
            ),
            path("find/", cls.as_view({"get": "find_view"}), name="find"),
        ]
