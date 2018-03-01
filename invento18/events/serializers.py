from invento18.events.models import Event
from rest_framework import serializers, viewsets, generics

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('title', 'description', 'category', '_type',
            'fee', 'prize', 'coordinators', 'day', 'imageurl',
            'pk',
        )

class EventList(generics.ListAPIView):
        serializer_class = EventSerializer
        def get_queryset(self):
            category = self.kwargs['category']
            _type = self.kwargs['_type']
            if category == 'gen':
                queryset = Event.objects.filter(category=category)
            else:
                queryset = Event.objects.filter(category=category, _type=_type)

            return queryset
