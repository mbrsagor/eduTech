from django.urls import path
from .views import classify_question, classify_question_history, search_results

urlpatterns = [
    path("", classify_question, name="question_classification"),
    path("history/", classify_question_history, name="history"),
    path("search_results/", search_results, name="search_results"),
]
