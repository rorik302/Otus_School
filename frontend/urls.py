from django.urls import path

from . import views

urlpatterns = [
    path('', views.WebpackView.as_view())
]