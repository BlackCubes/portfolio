from rest_framework.fields import Field


class ArticleCategorySerializedField(Field):
    """"""

    def to_representation(self, value):
        return [tag.name for tag in value.all()]


class ArticleHeaderImageSerializedField(Field):
    """"""

    def to_representation(self, value):
        return value.file.url
