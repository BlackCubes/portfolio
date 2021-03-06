# Generated by Django 4.0.2 on 2022-03-01 18:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("wagtailimages", "0023_add_choose_permissions"),
        ("article", "0010_remove_articlepage_categories_articlepage_category"),
    ]

    operations = [
        migrations.AddField(
            model_name="articlepage",
            name="search_image",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="+",
                to="wagtailimages.image",
                verbose_name="Search image",
            ),
        ),
    ]
