from rest_framework.fields import Field


class WorkCategorySerializedField(Field):
    """
    A serialized field to change the output for the category in a work.

    Outputs a dictionary with keys of ``"id"``, ``"uuid"`` and ``"name"``, if
    any.
    """

    def to_representation(self, value):
        if not value:
            return None

        return {"id": value.id, "uuid": value.uuid, "name": value.name}


class WorkMainImageSerializedField(Field):
    """
    A serialized field to change the output for the main image of a work.

    Outputs the image URL, if any.
    """

    def to_representation(self, value):
        if not value:
            return None

        return value.file.url


class WorkBodySerializedField(Field):
    """
    A serialized field to change the output for the body content in a work.

    Outputs everything normally except for the ``image_with_caption`` field
    (the main focus for this serialized field) which outputs the image URL, if
    any.
    """

    def to_representation(self, value):
        representation = []

        if not value:
            return representation

        for stream_item in value:
            stream_item_representation = {
                "id": stream_item.id,
                "type": stream_item.block.name,
                "value": stream_item.block.get_api_representation(
                    stream_item.value
                ),
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
