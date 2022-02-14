from rest_framework import serializers

from .models import ArticleCategory


class ArticleCategorySerializer(serializers.ModelSerializer):
    """"""

    class Meta:
        model = ArticleCategory
        fields = ("name",)
