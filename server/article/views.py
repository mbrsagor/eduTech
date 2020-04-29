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
from rest_framework.pagination import PageNumberPagination


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 5
    page_size_query_param = 'page_size'
    max_page_size = 8


class CategoryViewSet(ModelViewSet, PermissionHelperMixin):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    pagination_class = StandardResultsSetPagination

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def perform_update(self, serializer):
        serializer.save(author=self.request.user)

    def get_permissions(self):
        return self.authenticated_user_editable_only()


class TagsViewSet(ModelViewSet, PermissionHelperMixin):
    queryset = Tags.objects.all().order_by('-id')
    serializer_class = TagsSerializer
    pagination_class = StandardResultsSetPagination

    def get_permissions(self):
        return self.authenticated_user_editable_only()


class PostViewSet(ModelViewSet, PermissionHelperMixin):
    queryset = Post.objects.all().order_by('-id')
    serializer_class = PostSerializer
    pagination_class = StandardResultsSetPagination

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)

    def get_permissions(self):
        return self.authenticated_user_editable_only()


class LocationViewSet(ModelViewSet, PermissionHelperMixin):
    queryset = Location.objects.all().order_by('-id')
    serializer_class = LocationSerializer
    pagination_class = StandardResultsSetPagination

    def get_permissions(self):
        return self.admin_editable_only()


class CommentViewSet(ModelViewSet, PermissionHelperMixin):
    queryset = Comment.objects.all().order_by('-id')
    serializer_class = CommentSerializer
    pagination_class = StandardResultsSetPagination

    def perform_create(self, serializer):
        serializer.save(commend_by=self.request.user)

    def perform_update(self, serializer):
        serializer.save(commend_by=self.request.user)

    def get_permissions(self):
        return self.authenticated_user_editable_only()


class MenuViewSet(ModelViewSet, PermissionHelperMixin):
    queryset = Menu.objects.all().order_by('-id')
    serializer_class = MenuSerializer

    def get_permissions(self):
        return self.admin_editable_only()
