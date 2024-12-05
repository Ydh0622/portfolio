from django.urls import path
from .views import index, Recommendation

urlpatterns = [
    path('index/', index),
    path('Recommendation/,', Recommendation),
]