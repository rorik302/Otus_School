from django.contrib import admin

from study_app.models import Course, Module, Lesson


@admin.register(Course, Module, Lesson)
class StudyAdmin(admin.ModelAdmin):
    pass
