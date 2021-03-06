from django.db import models
from django.core.validators import RegexValidator, URLValidator
from django.utils.crypto import get_random_string
from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFill
from django.contrib.sites.shortcuts import get_current_site
# from django.contrib.sites.models import Site


def upload_path(instance, filename):
    return '/'.join(['files', str(instance.firstName) + str(instance.phoneNumber[-10:]), filename])


class UserCard(models.Model):
    firstName = models.CharField(max_length=30)
    lastName = models.CharField(max_length=30)
    email = models.EmailField()
    hasPhone = models.BooleanField()
    # files = models.ImageField(upload_to='images/', blank=True, null=True)
    files = models.ImageField(upload_to=upload_path, blank=True, null=True)
    image_thumbnail = ImageSpecField(source='files', processors=[ResizeToFill(40, 40)], format="JPEG",
                                     options={'quality': 60})
    phoneRegEx = RegexValidator(regex=r'^\+?1?\d{9,15}$',
                                message="Phone number must be entered in valid form. Up to 15 digits.")
    phoneNumber = models.CharField(max_length=17, blank=True, null=True)
    # validators = [phoneRegEx],
    created_at = models.DateTimeField(auto_now=True)

    @property
    def thumb(self):
        return f'http://127.0.0.1:8000{self.image_thumbnail.url}'

    # class UserImages(models.Model):
    #     user = models.ForeignKey(UserCard, related_name='images', on_delete=models.CASCADE)
    #     image = models.ImageField(upload_to=upload_path, blank=True, null=True)
    #     image_thumbnail = ImageSpecField(source='files', processors=[ResizeToFill(40, 40)], format="JPEG",
    #                                      options={'quality': 60})
    #     @property
    #     def thumb(self):
    #         return f'http://127.0.0.1:8000{self.image_thumbnail.url}'
    # request = None
    # full_path = ''.join(['http://',get_current_site(request).domain,self.image_thumbnail.url])
    # full_path = ''.join(['http://',Site.objects.get_current().domain,self.image_thumbnail.url])
    # return f'{full_path}'
    # https://utyatnishna.ru/info/25924/how-can-i-get-the-fullabsolute-url-with-domain-in-django
    # @full_name.setter
    # def full_name(self, value):
    #      names = value.split(' ')
    #      self.first_name = names[0]
    #      self.last_name = names[1]
    def __str__(self):
        return f'Name:{self.firstName}, Last name:{self.lastName}'

# class Image(models.Model):
#     # files = models.ImageField(upload_to=upload_path, blank=True, null=True)
#     files = models.ImageField(upload_to=upload_path, blank=True, null=True)
#
#     def __str__(self):
#         return f'Name:{self.user.firstName}, Last name:{self.user.lastName}'


#############################
# class AuthorManager(models.Manager):
#     def get_queryset(self):
#         return super(AuthorManager, self).get_queryset().filter(role='A')

# class EditorManager(models.Manager):
#     def get_queryset(self):
#         return super(EditorManager, self).get_queryset().filter(role='E')

# class Person(models.Model):
#     first_name = models.CharField(max_length=50)
#     last_name = models.CharField(max_length=50)
#     role = models.CharField(max_length=1, choices=(('A', _('Author')), ('E', _('Editor'))))
#     people = models.Manager()
#     authors = AuthorManager()
#     editors = EditorManager()
