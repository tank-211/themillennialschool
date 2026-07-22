from django.urls import path
from .views import EnquiryCreateView

urlpatterns = [
    path("enquiry/", EnquiryCreateView.as_view(), name="enquiry"),
]