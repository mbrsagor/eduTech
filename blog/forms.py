from django import forms
from .models import Category, Post, Comment


class CategoryForm(forms.ModelForm):
    """
    Name: Category form for creating and updating categories
    """
    class Meta:
        model = Category
        fields = ('name', 'is_active', 'icon')
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control', 'id': 'name', 'placeholder': 'Enter category name'}),
            'is_active': forms.CheckboxInput(attrs={'class': 'form-check-input'}),
            'icon': forms.FileInput(attrs={'class': 'form-control', 'id': 'icon', 'accept': 'image/*'}),
        }


class PostForm(forms.ModelForm):
    """
    Name: Post form for creating and updating posts
    """
    class Meta:
        model = Post
        fields = ('title', 'content', 'category', 'thumbnail', 'is_publish')
        read_only_fields = ('author',)
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control', 'id': 'title', 'placeholder': 'Enter post title'}),
            'content': forms.Textarea(attrs={'class': 'form-control', 'id': 'content', 'placeholder': 'Enter post content'}),
            'category': forms.Select(attrs={'class': 'form-control', 'id': 'category'}),
            'thumbnail': forms.FileInput(attrs={'class': 'form-control', 'id': 'thumbnail', 'accept': 'image/*'}),
            'is_publish': forms.CheckboxInput(attrs={'class': 'form-check-input'}),
        }
    