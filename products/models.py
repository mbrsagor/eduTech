from django.db import models
from django.utils.timezone import now
from django.db.models import JSONField


class Product(models.Model):
    title = models.CharField(max_length=70)
    image = models.CharField(max_length=250)
    likes = models.IntegerField(default=0)

    def __str__(self):
        return self.title[:30]


class User(models.Model):
    pass


class Listing(models.Model):
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
    created_date = models.DateTimeField(now)

    def __str__(self):
        return f"{self.title} and Price: {self.price}"
