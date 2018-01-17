from django.contrib.auth.models import AbstractUser
from django.core.urlresolvers import reverse
from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from django.utils.translation import ugettext_lazy as _
from django.utils import timezone


@python_2_unicode_compatible
class User(AbstractUser):

    gender_choices = (
    ('M', 'Male'),
    ('F', 'Female'),
    )
    # First Name and Last Name do not cover name patterns
    # around the globe.
    name = models.CharField(_('Name of User'), max_length=255)
    college = models.CharField(_('Name of college'), max_length=255)
    city = models.CharField(_('Name of city'), max_length=100)
    phone = models.CharField(_('Phone number'), max_length=10)
    gender = models.CharField(_('Your gender'), choices=gender_choices, default='M', max_length=2)
    date_joined = models.DateTimeField(default=timezone.now)


    def __str__(self):
        return self.username

    def get_absolute_url(self):
        return reverse('users:detail', kwargs={'username': self.username})
