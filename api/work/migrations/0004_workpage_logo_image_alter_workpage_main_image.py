# Generated by Django 4.0.2 on 2022-03-14 20:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailimages', '0023_add_choose_permissions'),
        ('work', '0003_workpage_company'),
    ]

    operations = [
        migrations.AddField(
            model_name='workpage',
            name='logo_image',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='logo_image', to='wagtailimages.image'),
        ),
        migrations.AlterField(
            model_name='workpage',
            name='main_image',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='main_image', to='wagtailimages.image'),
        ),
    ]
