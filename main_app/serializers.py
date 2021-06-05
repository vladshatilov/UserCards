from rest_framework import serializers
from .models import UserCard#, Image

#
# class UserImagesSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Image
#         fields = ('files',)
#         # fields = '__all__'


class UserCardSerializer(serializers.ModelSerializer):
    # user = serializers.ReadOnlyField(source='usercard.firstname')
    # files = UserImagesSerializer(source='files_set',many = True, read_only=True)
    thumb = serializers.ReadOnlyField()
    class Meta:
        model = UserCard
        fields = ('id', 'firstName', 'lastName', 'email', 'hasPhone', 'files', 'phoneNumber', 'thumb')
        # fields = '__all__'
    # def create(self, validated_data):
    #     images_data = validated_data.pop('files')
    #     user = UserCard.objects.create(**validated_data)
    #     for image in images_data:
    #         Image.objects.create(user=user,**image)
    #     return user
