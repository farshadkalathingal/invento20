from django.db import models

# Create your models here.
class Event(models.Model):
    category_types = (
    ('gen', 'General'),
    ('cse', 'CSE'),
    ('ece', 'ECE'),
    ('eee', 'EEE'),
    ('it', 'IT'),
    ('me', 'ME'),
    )
    type_types=(
    ('wor', 'Workshops'),
    ('com', 'Competitions'),
    ('sho', 'Shows'),
    ('oth', 'Other'),
    )
    title = models.CharField(max_length=50)
    description = models.TextField(max_length=2000)
    category = models.CharField(max_length=3, default='gen', choices=category_types)
    _type = models.CharField(max_length=3, default='wor', choices=type_types, verbose_name="Title")
    fee = models.PositiveIntegerField()# Set zero for free events
    coordinators = models.TextField(max_length=500)
    imageurl = models.URLField(blank=True)
    townscript_code = models.CharField(max_length=50, blank=True)


    def __str__(self):
        return self.title

# TODO: Remove this model
class ImageUrl(models.Model):
    name = models.CharField(max_length=50, blank=True)
    url = models.URLField()
    event = models.ForeignKey(Event, related_name='image_urls')

    def __str__(self):
        return self.name + " - " + self.event.title
