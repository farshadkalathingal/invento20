from django.shortcuts import render, redirect
from django.views.generic import DetailView
from django.views.generic.base import ContextMixin
from .models import Event, Ambassodar
from .forms import AmbassodarForm

class EventDetailView(DetailView):
    model = Event
    template_name = 'pages/event_detail.html'

def departmentview(request):

    if request.path == '/general/':
        template_name = 'pages/general.html'
        events = Event.objects.filter(category='gen')
        return render(request, template_name,
            {'events' : events }
        )

    else:
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
        talks = Event.objects.filter(category=dept, _type='tal')


        return render(request, template_name, {
        'workshops' : workshops,
        'competitions' : competitions,
        'shows' : shows,
        'talks' : talks,
        })
        

def ambassodar_create_view(request):
    form = AmbassodarForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('home')
    else:
        return render(request, 'pages/campus_ambassador.html', {'form':form})

def ambassador_page(request):
    form = AmbassodarForm()
    return render(request, 'pages/campus_ambassador.html', {'form':form})