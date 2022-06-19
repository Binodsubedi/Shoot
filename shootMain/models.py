from django.db import models


class User(models.Model):
    username = models.CharField(max_length=50,null=False)
    password = models.CharField(max_length=40,null=False)
    plan = models.CharField(max_length=30,null=False)

    def __str__(self):
        return self.username

class Payment(models.Model):
    uid = models.ForeignKey(User, on_delete=models.CASCADE, related_name='payment')
    paidDate = models.DateTimeField(auto_now=True)
    

    def __str__(self):
        return self.paidDate

class Photos(models.Model):
    uid = models.ForeignKey(User, on_delete=models.CASCADE, related_name='photos')
    photoName = models.CharField(max_length=40, null=False)

    def __str__(self):
        return self.photoName

class Videos(models.Model):
    uid = models.ForeignKey(User, on_delete=models.CASCADE, related_name='videos')
    videoName = models.CharField(max_length=40, null=False)

    def __str__(self):
        return self.photoName
