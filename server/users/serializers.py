from .models import Role, Profile
from django.contrib.auth.models import User
from rest_framework import serializers


class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = (
            'id', 'user', 'role', 'created_date'
        )


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id', 'first_name', 'last_name', 'email', 'username',
            'last_login', 'date_joined'
        )


class ProfileSerializer(serializers.ModelSerializer):
    user_role = serializers.SerializerMethodField()
    class Meta:
        model = Profile
        fields = (
            'id', 'user', 'address', 'bio', 'phone_number', 'user_role',
            'profile_photo', 'created_date', 'updated_date'
        )
        read_only_fields = ['user_role']

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['user'] = UserSerializer(instance.user).data
        return response
    
    def get_user_role(self, obj):
        return str(obj.user_role)
