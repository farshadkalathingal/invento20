from django.shortcuts import render
from django.views.generic import DetailView
from django.views.generic.base import ContextMixin
from .models import Event

class EventDetailView(DetailView):
    model = Event
    template_name = 'pages/event_detail.html'

def departmentview(request):

    if request.path == '/cse/':
        dept = 'cse'
    elif request.path == '/ece/':
        dept = 'ece'
    elif request.path == '/eee/':
        dept = 'eee'
    elif request.path == '/it/':
        dept = 'it'
    elif request.path == '/me/':
        dept = 'me'

    template_name = 'pages/' + dept + '_dept.html'

    workshops = Event.objects.filter(category=dept, _type='wor')
    competitions = Event.objects.filter(category=dept, _type='com')
    shows = Event.objects.filter(category=dept, _type='sho')

    print(dept)
    return render(request, template_name, {
    'workshops' : workshops,
    'competitions' : competitions,
    'shows' : shows,
    })
