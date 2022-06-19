import imp
from rest_framework.response import Response
from rest_framework import mixins, generics
from shootMain.api.serializers import UserSerializer
from shootMain.models import User


class UserEP(mixins.CreateModelMixin,mixins.ListModelMixin,generics.GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
    
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
    




