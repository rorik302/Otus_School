import graphene
from graphene_django.types import DjangoObjectType

from .models import Teacher, Student


class TeacherType(DjangoObjectType):

    class Meta:
        model = Teacher


class StudentType(DjangoObjectType):

    class Meta:
        model = Student


class Query:
    all_teachers = graphene.List(TeacherType, limit=graphene.Int())
    all_students = graphene.List(StudentType, limit=graphene.Int())
    teacher = graphene.Field(TeacherType, id=graphene.Int())
    student = graphene.Field(StudentType, id=graphene.Int())

    def resolve_all_teachers(self, info, **kwargs):
        if 'limit' in kwargs:
            return Teacher.objects.all()[:kwargs['limit']]
        return Teacher.objects.all()

    def resolve_all_students(self, info, **kwargs):
        if 'limit' in kwargs:
            return Student.objects.all()[:kwargs['limit']]
        return Student.objects.all()

    def resolve_teacher(self, info, **kwargs):
        return Teacher.objects.get(pk=kwargs['id'])

    def resolve_student(self, info, **kwargs):
        return Student.objects.get(pk=kwargs['id'])