from django.contrib import admin
from .models import Event
# Register your models here.

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', '_type', 'fee', 'prize', 'day')
    list_filter = ('category', '_type', 'fee', 'prize')
