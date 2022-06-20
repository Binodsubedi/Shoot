from django.urls import path
from shootMain.api.views import UserEP,UserSpecificEP

urlpatterns = [
    path('user/', UserEP.as_view(), name='user-list'),
    path('user/<int:pk>', UserSpecificEP.as_view(), name='user'),
]
