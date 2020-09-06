from django import forms

from study_app.models import Course


class CourseForm(forms.ModelForm):
    class Meta:
        model = Course
        fields = '__all__'
        labels = {
            'title': 'Заголовок',
            'duration': 'Продолжительность (в днях)',
            'description': 'Описание',
            'start_date': 'Начало занятий',
            'teachers': 'Преподаватели',
            'modules': 'Модули'
        }
        widgets = {
            'duration': forms.TextInput(),
            'description': forms.Textarea(attrs={'rows': 5}),
            'start_date': forms.DateInput(attrs={'placeholder': 'дд.мм.гггг'})
        }