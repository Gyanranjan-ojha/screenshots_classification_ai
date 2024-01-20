from django.shortcuts import render
from django.http import HttpResponse
import json 

def index(request):
    my_dict = {"insert_me": "I am from views.py"}
    return render(request,'index.html',context=my_dict)

def get_gpt_test(request):
    text = request.POST.get('text_field')
    print (text)
    return HttpResponse({json.dumps({'s':1,'m':"Successfully submitted !!"})})