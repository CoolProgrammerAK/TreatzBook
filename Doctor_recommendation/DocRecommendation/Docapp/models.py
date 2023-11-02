from django.db import models


class symptoms(models.Model):
  symptom1choices = (
    ('Chest pain', 'Chest pain'),
    ('shortness of breath', 'shortness of breath'),
    ('Acne','Acne'),
    ('skin rashes','skin rashes'),
    ('sore throat','sore throat'),
    ('Headache','Headache'),
    ('dizziness', 'dizziness'),
    ('seizures','seizures'),
    
  )
  symptom2choices = (
    ('Chest pain', 'Chest pain'),
    ('shortness of breath', 'shortness of breath'),
    ('Acne','Acne'),
    ('skin rashes','skin rashes'),
    ('sore throat','sore throat'),
    ('Headache','Headache'),
    ('dizziness', 'dizziness'),
    ('seizures','seizures'),
  )
  symptom3choices = (
    ('Chest pain', 'Chest pain'),
    ('shortness of breath', 'shortness of breath'),
    ('Acne','Acne'),
    ('skin rashes','skin rashes'),
    ('sore throat','sore throat'),
    ('Headache','Headache'),
    ('dizziness', 'dizziness'),
    ('seizures','seizures'),
  )
  symptom1 = models.CharField(max_length=25, choices=symptom1choices)
  symptom2 = models.CharField(max_length=25, choices=symptom2choices)
  symptom3 = models.CharField(max_length=25, choices=symptom3choices)

  def __str__(self):
    return '{}, {}'.format(self.symptom1, self.symptom2)
