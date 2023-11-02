from django.shortcuts import render
from django.http import JsonResponse
from .pickle.pickler import loadModel
# Create your views here.


def prediction(request):
  # Mongodb atlas address
  input_symptoms = request.GET.get('symptoms', '')
  # Split the input string into a list of symptoms
  symptoms_list = input_symptoms.split(',')

  # Join the list of symptoms back into a string with spaces
  input_symptoms_processed = ' '.join(symptoms_list)

  uri = "mongodb+srv://preshitx:trasadasyu7@cluster0.vnsrr7h.mongodb.net/?retryWrites=true&w=majority"
  svm_model,tfidf_vectorizer = loadModel(model_n="mySVM",client=uri)
  
  # Vectorize the input symptoms using the loaded tfidf_vectorizer
  X_input = tfidf_vectorizer.transform([input_symptoms_processed])

  # Predict the doctor specialization using the loaded svm_model
  predicted_specialization = svm_model.predict(X_input)

  return JsonResponse({'predicted_specialization': predicted_specialization[0]})