from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.urls import reverse

from .forms import QuestionForm
from .models import History
from .ml_model.predict import predict_question_level


@login_required
def classify_question(request):
    form = QuestionForm(request.POST or None)
    if request.method == "POST" and form.is_valid():
        question = form.cleaned_data["question"]
        prediction = predict_question_level(question)
        # Save history
        History.objects.create(title=question, classification=prediction, user_id=request.user.id)
        # Redirect to search results page with prediction as a query parameter
        return redirect(f"{reverse('search_results')}?query={question}&prediction={prediction}")
    return render(request, "classify.html", {"form": form})


@login_required
def classify_question_history(request):
    history = History.objects.filter(user_id=request.user.id)
    context = {"history": history}
    return render(request, "history.html", context)


@login_required
def search_results(request):
    query = request.GET.get("query", "")
    prediction = request.GET.get("prediction", "")
    # print(f"prediction: {prediction}")
    return render(request, "search_results.html", {"query": query, "prediction": prediction})
