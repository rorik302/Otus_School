import datetime
from random import randint, choice

from django.core.management import BaseCommand
from factory import DjangoModelFactory, Faker, fuzzy, Sequence
from factory.compat import UTC

from study_app.models import Course, Module, Lesson
from users_app.models import Teacher, Student


class CourseFactory(DjangoModelFactory):
    class Meta:
        model = Course

    title = Sequence(lambda c: f'Курс {Faker("text", max_nb_chars=20).generate()}')
    duration = fuzzy.FuzzyInteger(14, 365)
    description = Faker('text', max_nb_chars=1000)
    start_date = fuzzy.FuzzyDate(
        datetime.date.today(),
        datetime.date.today() + datetime.timedelta(days=180)
    )


class ModuleFactory(DjangoModelFactory):
    class Meta:
        model = Module

    title = Faker('text', max_nb_chars=50)


class LessonFactory(DjangoModelFactory):
    class Meta:
        model = Lesson

    title = Faker('text', max_nb_chars=50)
    purpose = Faker('text', max_nb_chars=200)
    description = Faker('text', max_nb_chars=1000)
    start_date_time = fuzzy.FuzzyDateTime(
        datetime.datetime(2020, 1, 1, tzinfo=UTC)
    )
    has_homework = fuzzy.FuzzyChoice([True, False])


def create_course():
    return CourseFactory.create()


def create_module():
    module = ModuleFactory.create()
    return module


def create_lesson(module):
    lesson = LessonFactory.build()
    lesson.module = module
    lesson.save()
    return lesson


def create_records():
    for cour in range(randint(2, 6)):
        course = create_course()
        teachers = Teacher.objects.all()
        for teacher_idx in range(randint(1, len(Teacher.objects.all()))):
            teacher = choice(Teacher.objects.all())
            course.teachers.add(teacher)    
        for mod in range(randint(2, 6)):
            module = create_module()
            course.modules.add(module)
            for les in range(randint(2, 6)):
                create_lesson(module)
        for student_idx in range(randint(1, len(Student.objects.all()))):
            student = choice(Student.objects.all())
            course.students.add(student)


class Command(BaseCommand):
    def handle(self, *args, **options):
        create_records()