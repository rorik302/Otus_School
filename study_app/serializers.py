from django.db.models import Prefetch
from rest_framework import serializers, fields

from .models import Course, Module, Lesson
from users_app.serializers import TeacherSerializer, StudentSerializer


class LessonSerializer(serializers.ModelSerializer):

    class Meta:
        model = Lesson
        fields = '__all__'


class ModuleSerializer(serializers.ModelSerializer):
    lessons = LessonSerializer(source='lesson_set', many=True)

    class Meta:
        model = Module
        fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):
    start_date = fields.DateField(required=False)
    modules = ModuleSerializer(many=True, read_only=True)
    teachers = TeacherSerializer(many=True, read_only=True)
    students = StudentSerializer(many=True, read_only=True)

    class Meta:
        model = Course
        fields = '__all__'
