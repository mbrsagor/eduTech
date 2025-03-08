from django.shortcuts import render
from .forms import QuestionForm
from .ml_model.predict import predict_question_level


def classify_question(request):
    prediction = None
    form = QuestionForm(request.POST or None)
    if request.method == "POST" and form.is_valid():
        question = form.cleaned_data["question"]
        prediction = predict_question_level(question)
    return render(request, "classify.html", {"form": form, "prediction": prediction})
