from django.contrib import admin

# Register your models here.
from .models import UserCard#, Image

admin.site.register(UserCard)
# class ImageAdmin(admin.StackedInline):
#     model = Image
#
#
# @admin.register(UserCard)
# class UserCardAdmin(admin.ModelAdmin):
#     inlines = [ImageAdmin]
#
#     class Meta:
#         model = UserCard
#
#
# @admin.register(Image)
# class ImageAdmin(admin.ModelAdmin):
#     pass
