from django.db import models
from django.core.urlresolvers import reverse

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
    ('tal', 'Talks'),
    ('oth', 'Other'),
    )
    title = models.CharField(max_length=50)
    description = models.TextField(max_length=2000)
    category = models.CharField(max_length=3, default='gen', choices=category_types)
    _type = models.CharField(max_length=3, default='wor', choices=type_types, verbose_name="Type")
    fee = models.PositiveIntegerField()# Set zero for free events
    prize = models.PositiveIntegerField()
    coordinators = models.TextField(max_length=500)
    day = models.PositiveIntegerField()
    imageurl = models.URLField(blank=True)
    posterurl = models.URLField(blank=True)
    townscript_code = models.CharField(max_length=50, blank=True)
    pdfurl = models.URLField(blank=True)



    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('event-view', kwargs={'pk':self.pk})

    def get_admin_url(self):
        return reverse("admin:%s_%s_change" % (self._meta.app_label, self._meta.model_name), args=(self.id,))
