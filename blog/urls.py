from django.urls import path
from blog.views import dashboard_view, category_view


urlpatterns = [
    # Dashboard
    path('dashboard/', dashboard_view.DashboardView.as_view(), name='dashboard'),
    # Categories
    path('create-category', category_view.CreateCategoryView.as_view(), name='create_category'),
]
