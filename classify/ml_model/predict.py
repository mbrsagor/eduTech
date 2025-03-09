import joblib
import os
import nltk
from classify.utils import preprocess_text

# Load Model & Vectorizer
class ModelLoader:
    def __init__(self):
        self.model = None
        self.vectorizer = None

    def load(self):
        BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        self.model = joblib.load(os.path.join(BASE_DIR, 'svm_model.pkl'))
        self.vectorizer = joblib.load(os.path.join(BASE_DIR, 'tfidf_vectorizer.pkl'))

    def get_model(self):
        if self.model is None:
            self.load()
        return self.model

    def get_vectorizer(self):
        if self.vectorizer is None:
            self.load()
        return self.vectorizer

# Instantiate the model loader
model_loader = ModelLoader()

# Prediction function
def predict_question_level(question):
    rf_model = model_loader.get_model()
    tfidf_vectorizer = model_loader.get_vectorizer()

    processed_text = preprocess_text(question)
    question_tfidf = tfidf_vectorizer.transform([processed_text])
    predicted_label = rf_model.predict(question_tfidf)[0]
    return predicted_label
