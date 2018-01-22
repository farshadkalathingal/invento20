from django import forms

class SignupForm(forms.Form):
    gender_choices = (
    ('M', 'Male'),
    ('F', 'Female'),
    )

    name = forms.CharField(max_length=30, label='Name')
    email = forms.EmailField(help_text='Enter you email')

    college = forms.CharField(help_text='Enter the name of your institution',
     initial='GEC Sreekrishnapuram')
    city = forms.CharField(max_length=20, label='Your city')
    phone = forms.CharField(max_length=10, label='Phone number')
    gender = forms.ChoiceField(choices=gender_choices, label='Gender')

    def signup(self, request, user):
        print("im signup()\n")
        user.name = self.cleaned_data['name']
        user.college = self.cleaned_data['college']
        user.email = self.cleaned_data['email']
        user.phone = self.cleaned_data['phone']
        user.city = self.cleaned_data['city']
        user.gender = self.cleaned_data['gender']
        user.save()
