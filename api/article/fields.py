from rest_framework.fields import Field


class ArticleTagSerializedField(Field):
    """
    A serialized field to change the output for the tags in an article.

    Outputs a list of dictionary with keys of ``"id"``, ``"name"`` and ``"slug"``,
    if any.
    """

    def to_representation(self, value):
        if not value:
            return []

        return [
            {"id": tag.id, "name": tag.name, "slug": tag.slug}
            for tag in value.all()
        ]


class ArticleCategorySerializedField(Field):
    """
    A serialized field to change the output for the category in an article.

    Outputs a dictionary with keys of ``"id"``, ``"uuid"`` and ``"name"``,
    if any.
    """

    def to_representation(self, value):
        if not value:
            return None

        return {"id": value.id, "uuid": value.uuid, "name": value.name}


class ArticleHeaderImageSerializedField(Field):
    """
    A serialized field to change the output for the header image of an article.

    Outputs the image URL, if any.
    """

    def to_representation(self, value):
        if not value:
            return None

        return value.file.url


class ArticleBlockSerializedField(Field):
    """
    A serialized field to change the output for the block content in an article.

    It outputs everything normally except for the ``image_with_caption`` field (the
    main focus) which outputs the image URL, if any.
    """

    def to_representation(self, value):
        representation = []

        if not value:
            return representation

        for stream_item in value:
            stream_item_representation = {
                "type": stream_item.block.name,
                "value": stream_item.block.get_api_representation(
                    stream_item.value
                ),
                "id": stream_item.id,
            }

            if stream_item.block.name == "image_with_caption":
                if (
                    "image" in stream_item.value
                    and stream_item.value["image"] is not None
                ):
                    stream_item_representation["value"][
                        "image"
                    ] = stream_item.value["image"].file.url

            representation.append(stream_item_representation)

        return representation
