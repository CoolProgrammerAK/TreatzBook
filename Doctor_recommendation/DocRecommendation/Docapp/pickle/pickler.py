import pickle
import pymongo
import time
import pandas as pd
from pymongo.mongo_client import MongoClient
from sklearn.feature_extraction.text import TfidfVectorizer

def saveModel(model,client):
  pickled_model = pickle.dumps(model)
  myclient = pymongo.MongoClient(client)
  model_name ="mySVM"
  mydb = myclient["mydb"]
  mycon = mydb["mycon"]
  info = mycon.insert_one({model_name: pickled_model, 'name': model_name, 'created_time': time.time()})
  print(info.inserted_id,'saved with this id')

  details = {
    'inserted_id': info.inserted_id,
    'model_name': model_name,
    'created_time': time.time()
  }
  return details

def loadModel(model_n, client):
  # Connect to MongoDB
  json_data = {}
  myclient = pymongo.MongoClient(client)
  #Access model
  mydb = myclient["mydb"]
  mycon = mydb["mycon"]
  data = mycon.find({'name': model_n})
  #Access database to fit vectorizer
  db = myclient["doctor_recommendation"]
  collection = db["doctor_data"]
  # Retrieve data from MongoDB
  data2 = list(collection.find({}, {'_id': 0}))
  # Convert data to DataFrame
  df = pd.DataFrame(data2)
  # Vectorize the symptoms
  tfidf_vectorizer = TfidfVectorizer()
  X = tfidf_vectorizer.fit_transform(df['Symptoms'])

  for i in data:
    json_data = i
  pickled_model = json_data[model_n]
  return pickle.loads(pickled_model),tfidf_vectorizer