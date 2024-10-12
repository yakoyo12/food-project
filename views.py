from django.shortcuts import render

# Create your views here.
def base(request):
    return render(request, 'unlock.html')

def dishes(request):
    return render(request, 'dish.html')