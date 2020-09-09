from django.views.generic import TemplateView


class WebpackView(TemplateView):
    template_name = 'frontend/index.html'
