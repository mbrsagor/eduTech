from django.db import models
from user.models import Timestamp, User


class Category(Timestamp):
    name = models.CharField(max_length=100)
    is_active = models.BooleanField(default=True)
    icon = models.FileField(upload_to='category', blank=True, null=True)

    def __str__(self):
        return self.name


class Post(Timestamp):
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts")
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="posts")
    is_publish = models.BooleanField(default=True)
    thumbnail = models.ImageField(upload_to='post', blank=True, null=True)

    def __str__(self):
        return self.title


class Comment(Timestamp):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="comments")
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="comments")
    content = models.TextField()

    def __str__(self):
        return f"{self.author} - {self.content[:10]}..."
