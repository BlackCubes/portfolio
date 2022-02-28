from django import forms
from django.core.exceptions import ValidationError


class SingleMultipleChoiceField(forms.MultipleChoiceField):
    """
    A custom multiple choice to select only one.
    """

    widget = forms.Select

    def to_python(self, value):
        if not value:
            return []

        return [value]

    def validate(self, value):
        if self.required and not value:
            raise ValidationError(self.error_messages["required"])

        if not self.valid_value(value):
            raise ValidationError(
                self.error_messages["invalid_choice"] % {"value": value}
            )
