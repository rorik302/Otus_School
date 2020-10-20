from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from . import views

router = routers.DefaultRouter()
router.register('courses', views.CourseViewSet)
router.register('modules', views.ModuleViewSet)
router.register('lessons', views.LessonViewSet)

urlpatterns = [
    # path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('auth/', include('rest_framework.urls', namespace='rest_framework')),
    # path('study/courses/', views.CoursesListView.as_view()),
    # path('study/courses/<int:pk>', views.CourseDetailView.as_view()),
    # path('study/modules/', views.ModuleListView.as_view()),
    # path('study/modules/<int:pk>', views.ModuleDetailView.as_view()),
    # path('study/lessons/', views.LessonListView.as_view()),
    # path('study/lessons/<int:pk>', views.LessonDetailView.as_view()),
    # path('users/teachers/', views.TeachersListView.as_view()),
    # path('users/teachers/<int:pk>', views.TeacherDetailView.as_view()),
    # path('users/students/', views.StudentsListView.as_view()),
    # path('users/students/<int:pk>', views.StudentDetailView.as_view()),
]

urlpatterns += router.urls
