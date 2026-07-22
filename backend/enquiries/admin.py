from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import Enquiry


@admin.register(Enquiry)
class EnquiryAdmin(ImportExportModelAdmin):
    list_display = (
        "parent_name",
        "child_name",
        "grade",
        "phone",
        "created_at",
    )

    search_fields = (
        "parent_name",
        "child_name",
        "phone",
        "email",
    )

    list_filter = (
        "grade",
        "created_at",
    )