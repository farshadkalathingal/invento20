from django.contrib import admin
from .models import Event, ImageUrl
# Register your models here.

@admin.register(Event, ImageUrl)
class EventAdmin(admin.ModelAdmin):
    pass
