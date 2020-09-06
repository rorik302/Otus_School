from django.db import models

from users_app.models import Teacher, Student


class Course(models.Model):
    title = models.CharField(max_length=250)
    duration = models.IntegerField()
    description = models.TextField()
    start_date = models.DateField()
    teachers = models.ManyToManyField(Teacher)
    modules = models.ManyToManyField('Module')
    students = models.ManyToManyField(Student)

    @property
    def duration_weeks(self):
        return self.duration // 7

    @property
    def duration_month(self):
        return self.duration // 30

    def __str__(self):
        return f'{self.title[:-1]}' if self.title.endswith('.') else f'{self.title}'


class Module(models.Model):
    title = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.title[:-1]}' if self.title.endswith('.') else f'{self.title}'


class Lesson(models.Model):
    title = models.CharField(max_length=100)
    purpose = models.TextField()
    description = models.TextField()
    start_date_time = models.DateTimeField()
    has_homework = models.BooleanField(default=False)
    module = models.ForeignKey('Module', on_delete=models.PROTECT)

    def __str__(self):
        return f'{self.title[:-1]}' if self.title.endswith('.') else f'{self.title}'
