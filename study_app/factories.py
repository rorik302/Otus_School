import factory

from .models import Course, Module, Lesson


class CourseFactory(factory.DjangoModelFactory):
    class Meta:
        model = Course


class ModuleFactory(factory.DjangoModelFactory):
    class Meta:
        model = Module


class LessonFactory(factory.DjangoModelFactory):
    class Meta:
        model = Lesson
