from django.contrib.auth import get_user_model
from django.contrib.auth.views import LoginView as DjangoLoginView
from django.contrib.auth.views import LogoutView as DjangoLogoutView
from django.urls import reverse_lazy
from django.views.generic import DetailView


class LoginView(DjangoLoginView):
    template_name = 'users_app/login.html'


class LogoutView(DjangoLogoutView):
    next_page = reverse_lazy('courses-list')


class ProfileView(DetailView):
    queryset = get_user_model().objects.all()
    template_name = 'users_app/profile.html'
