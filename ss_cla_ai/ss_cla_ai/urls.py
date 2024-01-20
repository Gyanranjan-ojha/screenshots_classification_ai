# urls.py
from django.urls import path
from ss_cla_app.views import ChatbotView

urlpatterns = [
    path('api/chatbot/', ChatbotView.as_view(), name='chatbot'),
]
