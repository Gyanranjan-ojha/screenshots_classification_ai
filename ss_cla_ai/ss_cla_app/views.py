# from django.shortcuts import render

# def index(request):
#     my_dict = {"insert_me": "I am from views.py"}
#     return render(request,'index.html',context=my_dict)

# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# from django.utils.decorators import method_decorator
# from django.views import View

# @method_decorator(csrf_exempt, name='dispatch')
# class ChatbotView(View):
#     def post(self, request, *args, **kwargs):
#         # Get the user's message from the request
#         data = request.POST
#         user_message = data.get('message', '')

#         # Process the user's message (you can replace this with your chatbot logic)
#         chatbot_response = "I'm just a demo chatbot. Ask me anything!"

#         # Return the chatbot response as JSON
#         return JsonResponse({'message': chatbot_response})
    


# views.py
from django.shortcuts import render
from django.views import View

class ChatbotView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'index.html')  # Change 'index.html' to your main template file

