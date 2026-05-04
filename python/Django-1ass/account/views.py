from django.shortcuts import render, redirect
from django.contrib.auth import logout


def signup(request):
    return render(request, 'account/signup.html')


def home(request):
    return render(request, 'account/home.html')


def logout_view(request):
    logout(request)
    return redirect('signup')
