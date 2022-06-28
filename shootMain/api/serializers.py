from dataclasses import field, fields
from importlib.resources import files
from rest_framework import serializers
from shootMain.models import User,Payment,Photos,Videos

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model= User
        # exclude = ("password",)
        fields= "__all__"

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