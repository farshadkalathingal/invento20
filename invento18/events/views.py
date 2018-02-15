from django.shortcuts import render
from django.views.generic import DetailView
from django.views.generic.base import ContextMixin
from .models import Event

class EventDetailView(DetailView):
    model = Event
    template_name = 'pages/event_detail.html'
