from django.http import JsonResponse
from django.shortcuts import redirect
from django.views import View
from django.views.generic import FormView

from email_app.forms import ContactForm
from email_app.tasks import send_email_to_admin_task, send_email_to_user_task


# class ContactView(FormView):
#     template_name = 'email_app/contacts.html'
#     form_class = ContactForm
#
#     def form_valid(self, form):
#         user_email = form.cleaned_data.get('email')
#         message = form.cleaned_data.get('text')
#         form.send_email_to_admin(user_email, message)
#         form.send_email_to_user(user_email)
#         return redirect('courses-list')


class ContactView(View):
    def post(self, request):
        email = request.POST['email']
        text = request.POST['text']

        send_email_to_admin_task.delay(
            user_email=email,
            message=text
        )

        send_email_to_user_task.delay(email)

        return JsonResponse({'status': 200})
