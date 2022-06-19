from django.urls import path
from shootMain.api.views import UserEP

urlpatterns = [
    path('user/', UserEP.as_view(), name='user-list'),
]
