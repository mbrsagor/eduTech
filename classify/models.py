from django.db import models


# Create your models here.
class History(models.Model):
    title = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
