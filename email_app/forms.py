from django import forms

from email_app.tasks import send_email_to_admin_task, send_email_to_user_task


class ContactForm(forms.Form):
    email = forms.EmailField(label='E-mail')
    text = forms.CharField(
        label='Текст',
        widget=forms.Textarea()
    )

    def send_email_to_admin(self, user_email, message):
        send_email_to_admin_task.delay(
            user_email=user_email,
            message=message
        )

    def send_email_to_user(self, user_email):
        send_email_to_user_task.delay(user_email)