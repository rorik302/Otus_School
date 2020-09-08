from rest_framework import generics, permissions
from rest_framework.viewsets import ModelViewSet

from study_app.models import Course, Module, Lesson
from study_app.serializers import CourseSerializer, ModuleSerializer, LessonSerializer
from users_app.models import Teacher, Student
from users_app.serializers import TeacherSerializer, StudentSerializer


class CourseView(generics.GenericAPIView):
    queryset = Course.objects.prefetch_related('modules', 'teachers', 'students', 'teachers__groups',
                                               'teachers__user_permissions', 'students__groups',
                                               'students__user_permissions')
    serializer_class = CourseSerializer


class CourseViewSet(ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class CoursesListView(generics.ListAPIView, CourseView):
    pass


class CourseDetailView(generics.RetrieveAPIView, CourseView):
    pass


class ModuleView(generics.GenericAPIView):
    queryset = Module.objects.all()
    serializer_class = ModuleSerializer


class ModuleViewSet(ModelViewSet):
    queryset = Module.objects.all()
    serializer_class = ModuleSerializer


class ModuleListView(generics.ListAPIView, ModuleView):
    pass


class ModuleDetailView(generics.RetrieveAPIView, ModuleView):
    pass


class LessonView(generics.GenericAPIView):
    queryset = Lesson.objects.prefetch_related('module')
    serializer_class = LessonSerializer


class LessonViewSet(ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer


class LessonListView(generics.ListAPIView, LessonView):
    pass


class LessonDetailView(generics.RetrieveAPIView, LessonView):
    pass


class TeacherView(generics.GenericAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    permission_classes = (permissions.IsAuthenticated, )


class TeachersListView(generics.ListAPIView, TeacherView):
    pass


class TeacherDetailView(generics.RetrieveAPIView, TeacherView):
    pass


class StudentView(generics.GenericAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = (permissions.IsAuthenticated, )


class StudentsListView(generics.ListAPIView, StudentView):
    pass


class StudentDetailView(generics.RetrieveAPIView, StudentView):
    pass
