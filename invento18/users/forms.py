from django import forms

class SignupForm(forms.Form):
    gender_choices = (
    ('M', 'Male'),
    ('F', 'Female'),
    )

    first_name = forms.CharField(max_length=30, label='First name')
    last_name = forms.CharField(max_length=30, label='Last name')
    college = forms.CharField(help_text='Enter the name of your institution',
     initial='GEC Sreekrishnapuram')
    email = forms.EmailField(help_text='Enter you email')
    phone = forms.CharField(max_length=10, label='Phone number')
    city = forms.CharField(max_length=20, label='Your city')
    gender = forms.ChoiceField(choices=gender_choices, label='Gender')

    def signup(self, request, user):
        user.first_name = self.cleaned_data['first_name']
        user.last_name = self.cleaned_data['last_name']
        user.college = self.cleaned_data['college']
        user.email = self.cleaned_data['email']
        user.phone = self.cleaned_data['phone']
        user.city = self.cleaned_data['city']
        user.gender = self.cleaned_data['gender']
        user.save()
