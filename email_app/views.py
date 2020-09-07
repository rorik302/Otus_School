from django.shortcuts import redirect
from django.views.generic import FormView

from email_app.forms import ContactForm


class ContactView(FormView):
    template_name = 'email_app/contacts.html'
    form_class = ContactForm

    def form_valid(self, form):
        user_email = form.cleaned_data.get('email')
        message = form.cleaned_data.get('text')
        form.send_email_to_admin(user_email, message)
        form.send_email_to_user(user_email)
        return redirect('courses-list')
