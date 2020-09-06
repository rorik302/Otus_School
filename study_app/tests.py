from datetime import datetime, timezone

from django.db.models import QuerySet
from django.test import TestCase, Client
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase, APIRequestFactory

from api_app.views import CourseViewSet, ModuleViewSet, LessonViewSet
from study_app.factories import CourseFactory, ModuleFactory, LessonFactory
from study_app.models import Lesson, Module


class LessonTests(TestCase):

    def test_create_course(self):
        lesson = Lesson.objects.create(
            title='Lesson title',
            description='Description',
            purpose='Purpose',
            start_date_time=datetime.now(tz=timezone.utc),
            has_homework=True,
            module=Module.objects.create(
                title='Module title',
            )
        )

        assert lesson.title == 'Lesson title'
        assert lesson.description == 'Description'
        assert lesson.purpose == 'Purpose'


class CourseTests(TestCase):
    def setUp(self):
        self.client = Client()

    def test_course_list_view(self):
        response = self.client.get(reverse('courses-list'))

        self.assertEqual(response.status_code, 200)
        self.assertIsInstance(response.context_data['object_list'], QuerySet)


class StudyTestCase(APITestCase):

    def test_get_courses(self):
        course = CourseFactory(
            title='Title',
            description='Description',
            duration='100',
            start_date=datetime.now()
        )
        factory = APIRequestFactory()
        request = factory.get('api/study/courses/')
        courses_view = CourseViewSet.as_view({'get': 'list'})
        response = courses_view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_modules(self):
        module = ModuleFactory(
            title='Title'
        )
        factory = APIRequestFactory()
        request = factory.get('api/study/modules/')
        modules_view = ModuleViewSet.as_view({'get': 'list'})
        response = modules_view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_lessons(self):
        lesson = LessonFactory(
            title='Title',
            purpose='Purpose',
            description='Description',
            start_date_time = datetime.now(),
            module=ModuleFactory(
                title='Title'
            )
        )
        factory = APIRequestFactory()
        request = factory.get('api/study/lessons/')
        lessons_view = LessonViewSet.as_view({'get': 'list'})
        response = lessons_view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
