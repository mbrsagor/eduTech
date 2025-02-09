from django.urls import path
from blog.views import dashboard_view, category_view


urlpatterns = [
    # Dashboard
    path('dashboard/', dashboard_view.DashboardView.as_view(), name='dashboard'),
    # Categories
    path('categories', category_view.CategoryListView.as_view(), name='categories'),
    path('create-category', category_view.CreateCategoryView.as_view(), name='create_category'),
    path('category-update/<pk>', category_view.CategoryUpdateView.as_view(), name='update_category'),
    path('category-delete/<pk>', category_view.CategoryDeleteView.as_view(), name='delete_category'),
]
