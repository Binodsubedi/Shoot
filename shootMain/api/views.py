import imp
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import mixins, generics
from shootMain.api.serializers import UserSerializer, PaymentSerializer,VideoSerializer,PhotoSerializer
from shootMain.models import Photos, User, Payment, Videos


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

    def post(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)


class UserCheckEP(APIView):
    def post(self, request):
        # print(request.data['username'])
        total = User.objects.all()
        # data = User.objects.get(username=request.data['username'])
        data = request.data
        checkData = total.filter(username=request.data['username']).values()[0]

        if checkData and checkData['username'] == data['username'] and checkData['password'] == data['password']:
            return Response({'status':'success'})
        # print(checkData)
        # print(dataset)
        # print(dataset.values()[0])
        # serialize = UserSerializerAll(data = dataset)
        # if serialize.is_valid():
        
            
        # print(data[''])
        # serialize = UserSerializerAll(data = data)
        # print(serialize.data)
        # if serialize.is_valid():
            # print(data)
            # print(serialize.data)
        return Response({'status':'fail'})


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

class PhotosListEP(mixins.CreateModelMixin,mixins.ListModelMixin,generics.GenericAPIView):
    queryset = Photos.objects.all()
    serializer_class = PhotoSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class PhotoEP(mixins.RetrieveModelMixin,mixins.DestroyModelMixin,generics.GenericAPIView):
    queryset = Photos.objects.all()
    serializer_class = PhotoSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class VideoListEP(mixins.CreateModelMixin,mixins.ListModelMixin,generics.GenericAPIView):
    queryset = Videos.objects.all()
    serializer_class = VideoSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class VideoEP(mixins.RetrieveModelMixin,mixins.DestroyModelMixin,generics.GenericAPIView):
    queryset = Videos.objects.all()
    serializer_class = VideoSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)




