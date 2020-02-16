from .models import (
    Category, Tags, Post, 
    Location, Comment, Menu
)

from rest_framework import serializers

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = (
            'id', 'name', 'parent', 'is_active', 'order',
            'user', 'show_as_category', 'created_at', 'updated_at'
        )
        read_only_fields = ['user']


class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tags
        fields = ['id', 'name', 'created_at', 'updated_at']


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = (
            'id', 'name', 'parent', 'location_type',
            'created_at', 'modified_at'
        )


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = (
            'id', 'title', 'meta_description', 'user', 'content', 'category', 'location',
            'tags', 'status', 'keywords', 'featured_image', 'created_on', 'updated_on'
        )
        read_only_fields = ['user']


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = (
            'id', 'comment_post', 'comments', 
            'commend_by', 'created_at'
        )
        read_only_fields = ['commend_by']


class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = (
            'id', 'name', 'parent', 'menu_type', 
            'url','created_at'
        )
