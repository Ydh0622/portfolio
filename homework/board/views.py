from django.shortcuts import render, HttpResponse
# Create your views here.

def index(request):
    return render(request, "index.html")

def Recommendation(request):
    return render(request, "Recommendation.html")





