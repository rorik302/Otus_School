from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from graphene_django.views import GraphQLView

from .schema import schema

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', include('study_app.urls')),
    path('accounts/', include('users_app.urls')),
    path('contacts/', include('email_app.urls')),
    path('api/', include('api_app.urls')),
    path('graphql/', GraphQLView.as_view(graphiql=True, schema=schema)),
    path('', include('frontend.urls'))
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        path('__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns
