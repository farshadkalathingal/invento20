from invento18.events.models import ImageUrl
from rest_framework import serializers, viewsets

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageUrl
        fields = ('name', 'url', 'event')

class EventViewSet(viewsets.ModelViewSet):
    queryset = ImageUrl.objects.all()
    serializer_class = EventSerializer
