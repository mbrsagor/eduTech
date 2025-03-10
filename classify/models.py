from django.db import models
from user.models import User


# Create your models here.
class History(models.Model):
    title = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    classification = models.CharField(max_length=50, blank=True, null=True, default='')
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
