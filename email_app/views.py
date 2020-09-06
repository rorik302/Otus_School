from django.shortcuts import redirect
from django.views.generic import TemplateView

from email_app.forms import ContactForm
from email_app.tasks import send_email_to_admin, send_email_to_user


class ContactView(TemplateView):
    template_name = 'email_app/contacts.html'

    def get_context_data(self, **kwargs):
        context = super(ContactView, self).get_context_data(**kwargs)
        context['form'] = ContactForm
        return context

    def post(self, request):
        form = ContactForm(request.POST)
        if form.is_valid():
            user_email = form.cleaned_data.get('email')
            message = form.cleaned_data.get('text')
            send_email_to_admin.delay(
                user_email=user_email,
                message=message
            )
            send_email_to_user.delay(user_email)
        return redirect('courses-list')