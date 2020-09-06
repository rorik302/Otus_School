from django.urls import path

from . import views

urlpatterns = [
    path('', views.CoursesListView.as_view(), name='courses-list'),
    path('course/<int:pk>/', views.CourseDetailView.as_view(), name='course-detail'),
    path('course/create/', views.CourseCreateView.as_view(), name='course-create'),
    path('course/update/<int:pk>/', views.CourseUpdateView.as_view(), name='course-update'),
    path('course/delete/<int:pk>/', views.CourseDeleteView.as_view(), name='course-delete')
]