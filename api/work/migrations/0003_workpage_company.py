# Generated by Django 4.0.2 on 2022-03-14 20:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('work', '0002_workpage_first_released_at'),
    ]

    operations = [
        migrations.AddField(
            model_name='workpage',
            name='company',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]