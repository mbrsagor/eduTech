from django.db import models
from django.conf import settings

ROLE_CHOICE = (
    ('Admin', 'Admin'),
    ('Author', 'Author'),
    ('Publisher', 'Publisher'),
)


class Role(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_query_name="users_role")
    role = models.CharField(max_length=10, choices=ROLE_CHOICE)
    created_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return self.role


class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='profile')
    user_role = models.ForeignKey(Role, on_delete=models.CASCADE, default=None)
    address = models.TextField(max_length=100, blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    profile_photo = models.ImageField(blank=True, null=True, upload_to='profile')
    phone_number = models.BigIntegerField(default=0, blank=True, null=True)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user.username
