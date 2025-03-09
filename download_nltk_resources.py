import nltk

# Ensure the necessary NLTK resources are available
try:
    nltk.data.find('tokenizers/punkt')
    nltk.data.find('taggers/averaged_perceptron_tagger')
except LookupError:
    print("Required NLTK resources not found. Downloading...")
    nltk.download('punkt')
    nltk.download('averaged_perceptron_tagger')
    print("NLTK resources downloaded successfully!")
