from rest_framework.filters import BaseFilterBackend

from taggit.managers import TaggableManager

from wagtail.api.v2.utils import BadRequestError


class FieldsInFilter(BaseFilterBackend):
    """
    Performs field level filtering using comma separated list of values
    using the ``in`` lookup: ``?tags__in=1,2,3``.
    """

    @staticmethod
    def tag_params(view, model):
        """
        Returns the set of the tag query parameters.
        """
        return {
            f"{field_name}__in"
            for field_name in view.get_available_fields(model, db_fields_only=True)
            if isinstance(model._meta.get_field(field_name), TaggableManager)
        }

    def filter_queryset(self, request, queryset, view):
        tag_params = self.tag_params(view, queryset.model)

        for field_name, value in request.GET.items():
            if field_name in tag_params:
                try:
                    queryset = queryset.filter(**{field_name: value.split(",")})
                except ValueError as error:
                    raise BadRequestError(
                        "field filter error. %r is not a valid value for %r (%s)"
                        % (value, field_name, error)
                    )

        return queryset
