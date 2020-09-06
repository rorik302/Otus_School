from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView

from study_app.forms import CourseForm
from study_app.models import Course


class CoursesListView(ListView):
    model = Course
    ordering = ['start_date']


class CourseDetailView(DetailView):
    model = Course


class CourseCreateView(CreateView):
    model = Course
    form_class = CourseForm
    template_name = 'study_app/course_create.html'
    success_url = reverse_lazy('courses-list')


class CourseUpdateView(UpdateView):
    model = Course
    form_class = CourseForm
    template_name = 'study_app/course_update.html'
    success_url = reverse_lazy('courses-list')


class CourseDeleteView(DeleteView):
    model = Course
    template_name = 'study_app/course_delete.html'
    success_url = reverse_lazy('courses-list')
