from django.db import models 
from django.conf import settings

STATUS_CHOICE = (
    ('Drafted', 'Drafted'),
    ('Published', 'Published'),
    ('Rejected', 'Rejected'),
    ('Trashed', 'Trashed'),
)

LOCATION_TYPE_CHOICES = [
    (1, 'Country'),
    (2, 'City'),
    (3, 'Area'),
    (4, 'Thana'),
    (5, 'Postcode'),
    (6, 'PostOffice'),
    (7, 'Division')
]

CHOICE_MENUS = [
    (1, 'Top-Menu'),
    (2, 'Main-Menu'),
    (3, 'Widget-Menu'),
    (4, 'Footer-Menu'),
    (5, 'Other-Menu'),
]

class Category(models.Model):
    name = models.CharField(max_length=20, unique=True)
    parent = models.ForeignKey('self', on_delete=models.CASCADE, blank=True, null=True, default=None)
    is_active = models.BooleanField(default=False)
    order = models.IntegerField(blank=True, null=True, default=9999)
    show_as_category = models.BooleanField(default=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return self.name

    def get_children(self):
        return Category.objects.filter(parent=self)

    def children_count(self):
        return Category.objects.filter(parent=self).count()
    

class Tags(models.Model):
    name = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.name


class Location(models.Model):
    location_type = models.IntegerField(choices=LOCATION_TYPE_CHOICES)
    name = models.CharField(max_length=255)
    parent = models.ForeignKey('self', on_delete=models.CASCADE, blank=True, null=True, default=None)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    @staticmethod
    def get_country_queryset():
        return Location.objects.filter(location_type=1)
    
    @staticmethod
    def get_city_queryset():
        return Location.objects.filter(location_type=2)

    @staticmethod
    def get_area_queryset():
        return Location.objects.filter(location_type=3)

    @staticmethod
    def get_thana_queryset():
        return Location.objects.filter(location_type=4)

    @staticmethod
    def get_postcode_queryset():
        return Location.objects.filter(location_type=5)
    
    @staticmethod
    def get_division_queryset():
        return Location.objects.filter(location_type=7)


class Post(models.Model):
    title = models.CharField(max_length=120, unique=True)
    meta_description = models.TextField(max_length=160, null=True, blank=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='author')
    content = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    location = models.ForeignKey(Location, on_delete=models.SET_NULL, null=True, blank=True)
    tags = models.ManyToManyField(Tags, related_name='rel_posts')
    status = models.CharField(max_length=10, choices=STATUS_CHOICE, default='Drafted')
    keywords = models.TextField(max_length=500, blank=True, null=True)
    featured_image = models.ImageField(upload_to='blog/uploads/%Y/%m/%d/', blank=True, null=True)
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateField(auto_now=True)

    class Meta:
        ordering = ['-updated_on']
    
    def __str__(self):
        return self.title


class Comment(models.Model):
    comment_post = models.ForeignKey(Post, on_delete=models.CASCADE, related_query_name='post_comment')
    comments = models.TextField()
    commend_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_query_name='comment_user')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return self.comments


class Menu(models.Model):
    name = models.CharField(max_length= 70, unique=True)
    menu_type = models.IntegerField(choices=CHOICE_MENUS)
    parent = models.ForeignKey('self', on_delete=models.CASCADE, blank=True, null=True, default=None)
    url = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.name

    @property
    def get_topMenu_queryset():
        return Menu.objects.filter(menu_type=1)
    
    @property
    def get_mainMenu_queryset():
        return Menu.objects.filter(menu_type=2)
    
    @property
    def get_widgetMenu_queryset():
        return Menu.objects.filter(menu_type=3)
    
    @property
    def get_footerMenu_queryset():
        return Menu.objects.filter(menu_type=4)

    @property
    def get_otherMenu_queryset():
        return Menu.objects.filter(menu_type=5)
