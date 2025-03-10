from django.shortcuts import render

from .forms import QuestionForm
from .models import History
from .ml_model.predict import predict_question_level


def classify_question(request):
    prediction = None
    form = QuestionForm(request.POST or None)
    if request.method == "POST" and form.is_valid():
        question = form.cleaned_data["question"]
        prediction = predict_question_level(question)
        # Save history
        History.objects.create(title=question, classification=prediction, user_id=request.user.id)
    return render(request, "classify.html", {"form": form, "prediction": prediction})


def classify_question_history(request):
    history = History.objects.filter(user_id=request.user.id)
    context = {"history": history}
    return render(request, "history.html", context)
