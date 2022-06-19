from django.contrib import admin
from django.urls import path,include
from shootMain.api import urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('app/', include(urls)),
]
