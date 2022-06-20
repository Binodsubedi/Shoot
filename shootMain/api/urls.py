from django.urls import path
from shootMain.api.views import UserEP,UserSpecificEP, PaymentEP,PaymentListEP
urlpatterns = [
    path('user/', UserEP.as_view(), name='user-list'),
    path('user/<int:pk>', UserSpecificEP.as_view(), name='user'),
    path('payment/', PaymentListEP.as_view(), name='payment-list'),
    path('payment/<int:pk>', PaymentEP.as_view(), name='payment'),
]
