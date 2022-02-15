from rest_framework.fields import Field


class ArticleCategorySerializedField(Field):
    """"""

    def to_representation(self, value):
        return [tag.name for tag in value.all()]


class ArticleHeaderImageSerializedField(Field):
    """"""

    def to_representation(self, value):
        return value.file.url


class ArticleBlockSerializedField(Field):
    """"""

    def to_representation(self, value):
        representation = []

        if value is None:
            return representation

        for stream_item in value:
            stream_item_representation = {
                "type": stream_item.block.name,
                "value": stream_item.block.get_api_representation(stream_item.value),
                "id": stream_item.id,
            }

            if stream_item.block.name == "image_with_caption":
                if (
                    "image" in stream_item.value
                    and stream_item.value["image"] is not None
                ):
                    stream_item_representation["value"]["image"] = stream_item.value[
                        "image"
                    ].file.url

            representation.append(stream_item_representation)

        return representation
