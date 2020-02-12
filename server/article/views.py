from .models import (
    Category, Tags, Post, 
    Location, Comment, Menu
)

from .serializers import (
    CategorySerializer, TagsSerializer,
    PostSerializer, LocationSerializer,
    CommentSerializer, MenuSerializer
)

from users.permissions import PermissionHelperMixin
from rest_framework.viewsets import ModelViewSet


class CategoryViewSet(ModelViewSet, PermissionHelperMixin):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def perform_update(self, serializer):
        serializer.save(author=self.request.user)

    def get_permissions(self):
        return self.authenticated_user_editable_only()


class TagsViewSet(ModelViewSet, PermissionHelperMixin):
    queryset = Tags.objects.all()
    serializer_class = TagsSerializer

    def get_permissions(self):
        return self.authenticated_user_editable_only()


class PostViewSet(ModelViewSet, PermissionHelperMixin):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)

    def get_permissions(self):
        return self.authenticated_user_editable_only()


class LocationViewSet(ModelViewSet, PermissionHelperMixin):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

    def get_permissions(self):
        return self.admin_editable_only()


class CommentViewSet(ModelViewSet, PermissionHelperMixin):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def perform_create(self, serializer):
        serializer.save(commend_by=self.request.user)

    def perform_update(self, serializer):
        serializer.save(commend_by=self.request.user)

    def get_permissions(self):
        return self.authenticated_user_editable_only()


class MenuViewSet(ModelViewSet, PermissionHelperMixin):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer

    def get_permissions(self):
        return self.admin_editable_only()
