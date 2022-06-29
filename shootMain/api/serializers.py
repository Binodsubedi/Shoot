from dataclasses import field, fields
from importlib.resources import files
from rest_framework import serializers
from shootMain.models import User,Payment,Photos,Videos



class PaymentSerializer(serializers.ModelSerializer):

    class Meta:
        model= Payment
        fields = "__all__"
        
class PhotoSerializer(serializers.ModelSerializer):

    class Meta:
        model= Photos
        fields = "__all__"

class VideoSerializer(serializers.ModelSerializer):

    class Meta:
        model= Videos
        fields = "__all__"
        
        
class UserSerializer(serializers.ModelSerializer):
    
    photos = PhotoSerializer(many=True,read_only=True)
    videos = VideoSerializer(many=True,read_only=True)

    class Meta:
        model= User
        # exclude = ("password",)
        fields= "__all__"