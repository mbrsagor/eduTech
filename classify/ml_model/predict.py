import joblib
import os
import nltk
from classify.utils import preprocess_text  # Ensure this function is correctly implemented


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

# Define Bloom's Taxonomy keywords
BLOOMS_KEYWORDS = {
    "remember": ["define", "list", "recall", "name", "identify"],
    "understand": ["describe", "explain", "summarize", "classify"],
    "apply": ["use", "implement", "solve", "demonstrate"],
    "analyze": ["compare", "contrast", "differentiate", "examine"],
    "evaluate": ["justify", "assess", "critique", "defend"],
    "create": ["design", "construct", "develop", "formulate"],
}

# Flatten the keyword list
BLOOMS_KEYWORDS_SET = set(word for sublist in BLOOMS_KEYWORDS.values() for word in sublist)


def contains_blooms_keyword(question):
    """
    Check if the question contains any Bloom's taxonomy keywords.
    """
    tokens = nltk.word_tokenize(question.lower())
    return any(word in BLOOMS_KEYWORDS_SET for word in tokens)


def predict_question_level(question):
    """
    Predict the Bloom's Taxonomy level of a given question if it contains Bloom's keywords.
    """
    if not contains_blooms_keyword(question):
        return "❌ No Bloom's keyword found in the question. Unable to classify."

    # Load the model and vectorizer
    rf_model = model_loader.get_model()
    tfidf_vectorizer = model_loader.get_vectorizer()

    # Preprocess the question (if necessary)
    processed_text = preprocess_text(question)

    # Apply TF-IDF vectorization
    question_tfidf = tfidf_vectorizer.transform([processed_text])

    # Predict class
    predicted_label = rf_model.predict(question_tfidf)[0]
    return predicted_label
