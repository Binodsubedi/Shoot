import imp
from rest_framework.response import Response
from rest_framework import mixins, generics
from shootMain.api.serializers import UserSerializer, PaymentSerializer
from shootMain.models import User, Payment


class UserEP(mixins.CreateModelMixin,mixins.ListModelMixin,generics.GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
    
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class UserSpecificEP(mixins.RetrieveModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin,generics.GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class PaymentListEP(mixins.ListModelMixin,mixins.CreateModelMixin,generics.GenericAPIView):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
    
    
class PaymentEP(mixins.RetrieveModelMixin,mixins.UpdateModelMixin,generics.GenericAPIView):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)
        
    def post(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)




