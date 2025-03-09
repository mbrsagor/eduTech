import re
import nltk
import spacy
from nltk.corpus import stopwords, wordnet
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer

# Load spaCy model (only POS tagging enabled)
nlp = spacy.load("en_core_web_sm", disable=['parser', 'ner'])

# Initialize NLTK components
nltk.download('punkt')
nltk.download('stopwords')
nltk.download('averaged_perceptron_tagger')
nltk.download('wordnet')

stop_words = set(stopwords.words('english')) - {'how', 'why', 'what', 'which', 'who'}
lemmatizer = WordNetLemmatizer()

# List of unnecessary words
unimportant_words = {'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'}

def get_wordnet_pos(tag):
    """ Convert POS tags to WordNet format """
    if tag.startswith('J'):
        return wordnet.ADJ
    elif tag.startswith('V'):
        return wordnet.VERB
    elif tag.startswith('N'):
        return wordnet.NOUN
    elif tag.startswith('R'):
        return wordnet.ADV
    return wordnet.NOUN  # Default to noun

def preprocess_text(text):
    """ Full text preprocessing pipeline """
    # Convert to lowercase
    text = text.lower()

    # Remove punctuation
    text = re.sub(r'[^\w\s]', '', text)

    # Tokenization
    tokens = word_tokenize(text)

    # POS tagging
    tagged_tokens = nltk.pos_tag(tokens)

    # Remove stopwords and unimportant words
    filtered_tokens = [(word, tag) for word, tag in tagged_tokens if word not in stop_words and word not in unimportant_words]

    # Lemmatization
    lemmatized_tokens = [lemmatizer.lemmatize(word, get_wordnet_pos(tag)) for word, tag in filtered_tokens]

    # Return processed text
    return " ".join(lemmatized_tokens)
