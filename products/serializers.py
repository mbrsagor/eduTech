from rest_framework import serializers
from .models import Product, Location


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = (
            'id', 'title', 'image', 'likes'
        )


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = (
            'id', 'name', 'parent', 'image', 'is_active', 'created_date'
        )
