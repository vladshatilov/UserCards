from django.shortcuts import render
from rest_framework import generics
from rest_framework.generics import get_object_or_404
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from rest_framework import viewsets

from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy

from rest_framework import authentication, permissions
from rest_framework.views import APIView



from .models import UserCard#, Image
from .serializers import UserCardSerializer


# from django.views.decorators.csrf import csrf_exempt

class StandardResultsSetPagination(PageNumberPagination):
    page_size = 2
    page_size_query_param = 'page_size'
    max_page_size = 3


# class UserCardViewer(generics.ListCreateAPIView):
# class UserCardViewer(generics.RetrieveUpdateDestroyAPIView):
class UserCardViewer(viewsets.ModelViewSet):
    queryset = UserCard.objects.all().order_by('-created_at')
    serializer_class = UserCardSerializer
    # lookup_field = 'pk'
    # pagination_class = StandardResultsSetPagination
    permission_classes = (AllowAny,)

    # def get(self,request,*args,format=None,**kwargs):
    #     users = UserCard.objects.all()
    #     serializer = UserCardSerializer(users, many=True)
    #     return Response(serializer.data)
    # def get_object(self):
    #     pk = self.kwargs.get('pk')
    #     user = UserCard.objects.filter(pk=pk)
    #     serializer = UserCardSerializer(user, many=True)
    #     return Response(serializer.data)

#############################
# serializer = AccountSerializer(account, context={'request': request})
# serializer.data
# # {'id': 6, 'owner': u'denvercoder9', 'created': datetime.datetime(2013, 2, 12, 09, 44, 56, 678870), 'details': 'http://example.com/accounts/6/details'}


#############################
# from myapp.permissions import IsAdminOrIsSelf
# from rest_framework.decorators import action

# class UserViewSet(ModelViewSet):
#     ...

#     @action(methods=['post'], detail=True, permission_classes=[IsAdminOrIsSelf],
#             url_path='change-password', url_name='change_password')
#     def set_password(self, request, pk=None):
#         ...

#############################       
# class Entry(models.Model):
#     user = models.TextField(db_column='User', blank=True)
#     date = models.DateTimeField(blank=True)

# class Color(models.Model):
#     color = models.TextField(blank=True)
#     entry = models.ForeignKey(Entry)
    
# entrys = Entry.objects.all().prefetch_related('color_set')

# for e in entrys:
#     print e.color_set.all()

    # # # #     """ Return a list of all users.
    # # # #     """
    # # # #
    # # # #     usernames = [user.files.url for user in UserCard.objects.all()]
    # # # #     return Response(usernames)
    # #     obj = get_object_or_404(self.get_queryset(), id=self.kwargs["id"])
    #     model = kwargs.get()
    #     return Response(obj)
    # def post(self,request,format= None):
    #     return(Response('hi from here'))

# class UserCardViewerDetail(generics.RetrieveUpdateDestroyAPIView):
#     lookup_field = 'pk'
#     queryset = UserCard.objects.all()
#     serializer_class = UserCardSerializer
#     # pagination_class = StandardResultsSetPagination
#     permission_classes = (AllowAny,)
#     def get(self,request,*args,format=None,**kwargs):
#         users = UserCard.objects.get(id=self.pk)
#         serializer = UserCardSerializer(users, many=True)
#         return Response(serializer.data)

# @csrf_exempt
def index(request):
    return render(request, 'index.html', {})

# class ListUsers(APIView):
#     """
#     View to list all users in the system.
#     * Requires token authentication.
#     * Only admin users are able to access this view.
#     """
#     authentication_classes = (authentication.TokenAuthentication,)
#     permission_classes = (permissions.IsAdminUser,)
# Атрибуты API
# .renderer_classes
# .parser_classes
# .authentication_classes
# .throttle_classes
# .permission_classes
# .content_negotiation_class

#     def get(self,request,format=None):
#         """ Return a list of all users.
#         """
#         usernames = [user.username for user in User.objects.all()]
#         return Response(usernames)
