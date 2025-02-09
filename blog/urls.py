from django.urls import path
from blog.views import dashboard_view, category_view, post_view


urlpatterns = [
    # Dashboard
    path('dashboard/', dashboard_view.DashboardView.as_view(), name='dashboard'),
    # Categories
    path('categories', category_view.CategoryListView.as_view(), name='categories'),
    path('create-category', category_view.CreateCategoryView.as_view(), name='create_category'),
    path('category-update/<pk>', category_view.CategoryUpdateView.as_view(), name='update_category'),
    path('category-delete/<pk>', category_view.CategoryDeleteView.as_view(), name='delete_category'),
    # Posts
    path('posts', post_view.PostListView.as_view(), name='posts'),
    path('create-post', post_view.CreatePostView.as_view(), name='create_post'),
    # path('post-update/<pk>', post_view.PostUpdateView.as_view(), name='update_post'),
    # path('post-delete/<pk>', post_view.PostDeleteView.as_view(), name='delete_post'),
]
