from django.db import models
from django.utils.timezone import now
from django.db.models import JSONField


class Timestamp(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Product(Timestamp):
    title = models.CharField(max_length=70)
    image = models.CharField(max_length=250)
    likes = models.IntegerField(default=0)

    def __str__(self):
        return self.title[:30]


class Location(Timestamp):
    name = models.CharField(max_length=150)
    parent = models.ForeignKey('self', on_delete=models.CASCADE, related_name='location', blank=True, null=True)
    image = models.ImageField(upload_to='location/%y/%m', null=True, blank=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return self.name[:30]

    def get_children(self):
        return Location.objects.filter(parent=self)

    def children_count(self):
        return Location.objects.filter(parent=self).count()


class Listing(Timestamp):
    class SaleType(models.TextChoices):
        FOR_SALE = 'For Sale'
        FOR_RENT = 'For Rent'

    class HomeType(models.TextChoices):
        HOUSE = 'House'
        CONDO = 'Condo'
        TOWNHOUSE = 'Townhouse'

    realtor = models.EmailField(max_length=120)
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    address = models.TextField()
    city = models.CharField(max_length=200)
    state = models.CharField(max_length=200)
    zipcode = models.CharField(max_length=50)
    description = models.TextField()
    price = models.IntegerField()
    bedrooms = models.IntegerField()
    bathroom = models.DecimalField(max_digits=2, decimal_places=1)
    sale_type = models.CharField(max_length=10, choices=SaleType.choices, default=SaleType.FOR_RENT)
    home_type = models.CharField(max_length=10, choices=HomeType.choices, default=HomeType.HOUSE)
    photo = models.ImageField(upload_to='listing', blank=True, null=True)
    gallery = JSONField(blank=True, null=True, default=None)
    is_publish = models.BooleanField(default=False)
    is_available = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.title} and Price: {self.price}"
