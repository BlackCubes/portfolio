# Generated by Django 4.0.2 on 2022-02-17 04:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("article", "0008_articlepage_reading_time"),
    ]

    operations = [
        migrations.AlterField(
            model_name="articlepage",
            name="reading_time",
            field=models.FloatField(default=0.0),
        ),
    ]
