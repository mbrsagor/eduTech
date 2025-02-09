from django.views import generic
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from django.contrib.messages.views import SuccessMessageMixin


from blog import forms
from blog.models import Category



@method_decorator(login_required(login_url='/user/signin/'), name='dispatch')
class CreateCategoryView(SuccessMessageMixin, generic.CreateView):
    """
    Category creating using CMS
    """
    model = Category
    form_class = forms.CategoryForm
    success_url = '/blog/create-category'
    success_message = 'Category created successfully.'
    template_name = 'category/create_category.html'



@method_decorator(login_required(login_url='/user/signin/'), name='dispatch')
class CategoryListView(generic.ListView):
    """
    Category listing using CMS
    """
    model = Category
    template_name = 'category/category_list.html'
    context_object_name = 'categories'
    paginate_by = 8
    ordering = ['-created_at']


@method_decorator(login_required(login_url='/user/signin/'), name='dispatch')
class CategoryUpdateView(SuccessMessageMixin, generic.UpdateView):
    """
    Category updating using CMS
    """

    model = Category
    form_class = forms.CategoryForm
    success_url = '/blog/categories'
    success_message = 'Category created successfully.'
    template_name = 'category/create_category.html'


@method_decorator(login_required(login_url='/user/signin/'), name='dispatch')
class CategoryDeleteView(SuccessMessageMixin, generic.DeleteView):
    """
    Category deleting using CMS
    """
    model = Category
    success_url = '/blog/categories'
    success_message = 'The category has been deleted.'
    template_name = 'common/delete_confirm.html'
