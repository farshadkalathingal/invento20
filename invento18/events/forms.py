from django import forms
from .models import Ambassodar

class AmbassodarForm(forms.ModelForm):

    class Meta:
            model = Ambassodar
            fields = [
                'first_name',
                'last_name',
                'email',
                'phone',
                'college',
                'department'
            ]
            