from rest_framework import generics
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from study_app.models import Course, Module, Lesson
from study_app.serializers import CourseSerializer, ModuleSerializer, LessonSerializer
from users_app.models import Teacher, Student
from users_app.serializers import TeacherSerializer, StudentSerializer


class CourseViewSet(ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class ModuleViewSet(ModelViewSet):
    queryset = Module.objects.all()
    serializer_class = ModuleSerializer


class LessonViewSet(ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer


class TeacherView(generics.GenericAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    # permission_classes = (permissions.IsAuthenticated, )


class TeachersListView(generics.ListAPIView, TeacherView):
    pass


class TeacherDetailView(generics.RetrieveAPIView, TeacherView):
    pass


class StudentView(generics.GenericAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    # permission_classes = (permissions.IsAuthenticated, )


class StudentsListView(generics.ListAPIView, StudentView):
    pass


class StudentDetailView(generics.RetrieveAPIView, StudentView):
    pass
