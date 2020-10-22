from rest_framework import generics
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet, ViewSet

from study_app.models import Course, Module, Lesson
from study_app.serializers import CourseSerializer, ModuleSerializer, LessonSerializer
from users_app.models import Teacher, Student
from users_app.serializers import TeacherSerializer, StudentSerializer


class CoursesViewSet(ViewSet):
    def list(self, request):
        queryset = Course.objects.all()
        serializer = CourseSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        course = Course(
            title=request.POST['title'],
            description=request.POST['description'],
            start_date=request.POST['startDate'],
            duration=request.POST['duration'],
        )
        course.save()

        for teacher_id in request.data['teachers'].split(','):
            teacher = Teacher.objects.get(pk=teacher_id)
            course.teachers.add(teacher)

        for module_id in request.data['modules'].split(','):
            module = Module.objects.get(pk=module_id)
            course.modules.add(module)

        course.save()

        serializer = CourseSerializer(course)
        return Response(serializer.data)

    def retrieve(self, request, pk):
        course = Course.objects.get(pk=pk)
        serializer = CourseSerializer(course)
        return Response(serializer.data)


class ModuleViewSet(ModelViewSet):
    queryset = Module.objects.all()
    serializer_class = ModuleSerializer


class LessonViewSet(ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer


class TeacherViewSet(ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer


class StudentsViewSet(ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    def create(self, request, *args, **kwargs):
        student = Student(
            username=request.data['login'],
        )
        student.set_password(request.data['password'])
        student.save()

        serializer = StudentSerializer(student)
        return Response(serializer.data)
