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
