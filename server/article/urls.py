from .views import (
    CategoryViewSet, TagsViewSet, PostViewSet, 
    LocationViewSet, CommentViewSet, MenuViewSet
)

from rest_framework.routers import DefaultRouter
router = DefaultRouter()

router.register('category', CategoryViewSet)
router.register('tag', TagsViewSet)
router.register('post', PostViewSet)
router.register('location', LocationViewSet)
router.register('comment', CommentViewSet)
router.register('menu', MenuViewSet)

urlpatterns = router.urls
