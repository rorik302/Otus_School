from django.conf import settings

from School.celery import app
from django.core.mail import send_mail


@app.task
def send_email_to_admin_task(user_email, message):
    from_email = user_email
    subject = 'Пользователь написал письмо'
    message = message
    recipients = [settings.ADMIN_EMAIL]
    send_mail(subject, message, from_email, recipients)


@app.task
def send_email_to_user_task(email):
    from_email = settings.ADMIN_EMAIL
    subject = 'Письмо успешно отправлено'
    message = 'Письмо успешно отправлено'
    recipients = [email]
    send_mail(subject, message, from_email, recipients)
