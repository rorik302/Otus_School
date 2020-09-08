from rest_framework import serializers

from users_app.models import Student, Teacher


class TeacherSerializer(serializers.ModelSerializer):

    class Meta:
        model = Teacher
        fields = ('id', 'username', 'first_name', 'last_name', 'email')


class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student
        fields = ('id', 'username', 'first_name', 'last_name', 'email')
