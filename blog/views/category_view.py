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
