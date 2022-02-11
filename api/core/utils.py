import random
import string

from django.utils.text import slugify


def random_string_generator(
    string_size=10, chars=string.ascii_lowercase + string.digits
):
    """
    Generates a random string with a default of size of 10.
    """
    return "".join(random.choice(chars) for _ in range(string_size))


def unique_slug_generator(instance, new_slug=None):
    """
    Assumes the instance has a model with a slug field and a title field for Wagtail's
    higher-level model `Page`.

    Returns: Unique slug from the model's title if the slug query exists in the DB, or the
    newly created slug that slugifies the model's title if the slug query does not exist in
    the DB.
    """
    if new_slug is not None:
        slug = new_slug
    else:
        slug = slugify(instance.title)

    model = instance.__class__
    query_exists = model.objects.filter(slug=slug).exists()

    if query_exists:
        unique_slug = "{slug}-{random_string}".format(
            slug=slug, random_string=random_string_generator(string_size=4)
        )

        # Run this function again to check if the uniquely random slug is truly unique
        # in the DB. If it is unique, return the unique slug. Otherwise, generate
        # another unique slug.
        return unique_slug_generator(instance, new_slug=unique_slug)

    return slug
