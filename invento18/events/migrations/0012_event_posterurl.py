# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2018-02-27 08:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0011_event_day'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='posterurl',
            field=models.URLField(blank=True),
        ),
    ]