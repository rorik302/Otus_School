from django.conf import settings
from django.contrib import admin
from django.urls import path, include, re_path
from graphene_django.views import GraphQLView

from .schema import schema

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api_app.urls')),
    re_path(r'.*', include('frontend.urls'))
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        path('__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns
