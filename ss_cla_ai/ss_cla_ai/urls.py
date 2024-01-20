from django.contrib import admin
from django.urls import path
from ss_cla_app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name="homepage"),
    path(r'getGPTPromt', views.get_gpt_text, name="gpt_text" )
]
