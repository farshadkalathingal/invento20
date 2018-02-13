from django.shortcuts import render
from django.views.generic import DetailView
from django.views.generic.base import ContextMixin
from .models import Event

class EventContextMixin(ContextMixin):
    def get_context_data(self, **kwargs):
        context = super(EventDetailView, self).get_context_data(**kwargs)
        context['image_urls'] = Event.image_urls.all()
        return context

class EventDetailView(DetailView):
    model = Event
    template_name = 'pages/event_detail.html'
