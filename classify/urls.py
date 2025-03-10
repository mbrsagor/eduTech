from django.urls import path
from .views import classify_question

urlpatterns = [
    path("", classify_question, name="question_classification")
]
