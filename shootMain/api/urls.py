from django.urls import path
from shootMain.api.views import (UserEP,UserSpecificEP,UserCheckEP, PaymentEP,
PaymentListEP,PhotosListEP,PhotoEP,VideoListEP,VideoEP)
urlpatterns = [
    path('user', UserEP.as_view(), name='user-list'),
    path('usercheck', UserCheckEP.as_view(), name='user-check'),
    path('user/<int:pk>', UserSpecificEP.as_view(), name='user'),
    path('payment', PaymentListEP.as_view(), name='payment-list'),
    path('payment/<int:pk>', PaymentEP.as_view(), name='payment'),
    path('photos/', PhotosListEP.as_view(), name='photo-list'),
    path('photos/<int:pk>', PhotoEP.as_view(), name='photo'),
    path('videos/', VideoListEP.as_view(), name='video-list'),
    path('videos/<int:pk>', VideoEP.as_view(), name='video'),
]
