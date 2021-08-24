from django.db import models


class Product(models.Model):
    title = models.CharField(max_length=70)
    image = models.CharField(max_length=250)
    likes = models.IntegerField(default=0)

    def __str__(self):
        return self.title[:30]


class User(models.Model):
    pass
