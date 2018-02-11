from django.shortcuts import render
from django.views.generic import DetailView
from .models import Event

# Create your views here.
class EventDetailView(DetailView):
    model = Event
    template_name = 'pages/event_detail.html'
