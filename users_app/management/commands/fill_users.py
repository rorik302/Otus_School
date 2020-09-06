import datetime
import random

from django.core.management import BaseCommand
from factory import DjangoModelFactory, Faker, LazyAttribute, fuzzy, PostGenerationMethodCall

from users_app.models import User, Teacher, Student


class UserFactory(DjangoModelFactory):
    class Meta:
        model = User

    first_name = Faker('first_name')
    last_name = Faker('last_name')
    username = LazyAttribute(lambda user: f'{user.first_name.lower()}.{user.last_name.lower()}')
    password = PostGenerationMethodCall('set_password', 'password')
    email = LazyAttribute(lambda user: f'{user.username}@exaple.com')
    birth_date = fuzzy.FuzzyDate(
        start_date=datetime.date(1950, 1, 1),
        end_date=datetime.date.today() - datetime.timedelta(days=18 * 365),
    )


class TeacherFactory(UserFactory):
    class Meta:
        model = Teacher

    user_type = 'teacher'


class StudentFactory(UserFactory):
    class Meta:
        model = Student

    user_type = 'student'


def create_records():
    for i in range(10):
        factory = random.choice([TeacherFactory, StudentFactory])
        factory.create()


class Command(BaseCommand):
    def handle(self, *args, **options):
        create_records()