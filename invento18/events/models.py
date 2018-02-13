from django.db import models

# Create your models here.
class Event(models.Model):
    category_types = (
    ('gen', 'General'),
    ('cse', 'CSE'),
    ('ec', 'ECE'),
    ('eee', 'EEE'),
    ('it', 'IT'),
    ('me', 'ME'),
    )
    title = models.CharField(max_length=50)
    description = models.TextField(max_length=500)
    category = models.CharField(max_length=3, default='gen', choices=category_types)
    fee = models.PositiveIntegerField()# Set zero for free events
    coordinators = models.TextField(max_length=100)

    def __str__(self):
        return self.title

class ImageUrl(models.Model):
    name = models.CharField(max_length=50, blank=True)
    url = models.URLField()
    event = models.ForeignKey(Event, related_name='image_urls')

    def __str__(self):
        return self.name + " - " + self.event.title
