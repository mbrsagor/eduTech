from django.urls import path
from .views import classify_question, classify_question_history

urlpatterns = [
    path("", classify_question, name="question_classification"),
    path("history/", classify_question_history, name="history")
]
