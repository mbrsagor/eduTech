from .views import RoleViewSet, ProfileApiView

from django.urls import path, include
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register('roles', RoleViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('profile', ProfileApiView.as_view(), name='profile'),
]
