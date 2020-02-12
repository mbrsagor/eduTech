from django.contrib import admin

from .models import *

admin.site.register(Category)
admin.site.register(Tags)
admin.site.register(Location)
admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(Menu)
