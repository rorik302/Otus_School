from django import forms


class ContactForm(forms.Form):
    email = forms.EmailField(label='E-mail')
    text = forms.CharField(
        label='Текст',
        widget=forms.Textarea()
    )