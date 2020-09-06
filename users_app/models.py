from django.db import models
from django.contrib.auth.models import User as Dj_User


class User(Dj_User):
    class Meta:
        abstract = True

    birth_date = models.DateField(null=True)
    user_type = models.CharField(max_length=10)

    @property
    def full_name(self):
        return f'{self.last_name} {self.first_name}'

    def __str__(self):
        return f'{self.full_name}'


class Teacher(User):
    pass


class Student(User):
    pass
