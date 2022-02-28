from wagtail.api.v2.views import PagesAPIViewSet as BasePagesAPIViewSet

from .backends import FieldsInFilter


class PagesAPIViewSet(BasePagesAPIViewSet):
    """
    A custom view on Wagtail's ``PagesAPIViewSet`` to support query
    filtering for ``tags``.
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
