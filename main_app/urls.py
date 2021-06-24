from django.urls import path
from . import views
from rest_framework import routers

router = routers.SimpleRouter()
router.register('card', views.UserCardViewer, basename='user')

urlpatterns = [
    # path('api/card/', views.UserCardViewer.as_view(), name='user-detail'),
    # path('api/card/<int:pk>/', views.UserCardViewer.as_view(), name='user-detail-view')
]

urlpatterns += router.urls
