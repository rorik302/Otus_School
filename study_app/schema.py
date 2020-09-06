import graphene
from graphene_django.types import DjangoObjectType

from .models import Course, Module, Lesson


class CourseType(DjangoObjectType):

    class Meta:
        model = Course


class ModuleType(DjangoObjectType):

    class Meta:
        model = Module


class LessonType(DjangoObjectType):

    class Meta:
        model = Lesson


class Query:
    all_courses = graphene.List(CourseType)
    all_modules = graphene.List(ModuleType)
    all_lessons = graphene.List(LessonType)

    def resolve_all_courses(self, *args, **kwargs):
        return Course.objects.all()

    def resolve_all_modules(self, *args, **kwargs):
        return Module.objects.all()

    def resolve_all_lessons(self, *args, **kwargs):
        return Lesson.objects.all()
