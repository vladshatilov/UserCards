from rest_framework import serializers
from .models import UserCard
    # ,UserImages

#
# class UserImagesSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserImages
#         fields = ('image','thumb')
        # fields = '__all__'




class UserCardSerializer(serializers.ModelSerializer):
    # user = serializers.ReadOnlyField(source='usercard.firstname')
    # files = UserImagesSerializer(source='files_set',many = True, read_only=True)
    # files = UserImagesSerializer(many = True, context={'request': request})

    thumb = serializers.ReadOnlyField()
    # images = UserImagesSerializer(many=True, read_only=False)
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


#############################
# .data - возвращает исходное примитивное представление.
# .is_valid() - десериализирует и проверяет входящие данные.
# .validated_data - возвращает проверенные входящие данные.
# .errors - Возвращает любые ошибки во время проверки.
# .save() - Сохраняет проверенные данные в экземпляре объекта.

# .to_representation () - переопределите для поддержки сериализации для операций чтения.
# .to_internal_value () - переопределите для поддержки десериализации для операций записи.
# .create () и .update () - переопределите один или оба метода для поддержки экземпляров сохранения.

# class HighScoreSerializer(serializers.BaseSerializer):
#     def to_representation(self, obj):
#         return {
#             'score': obj.score,
#             'player_name': obj.player_name
#         }

# Теперь мы можем использовать этот класс для сериализации отдельных экземпляров HighScore:
# @api_view(['GET'])
# def high_score(request, pk):
#     instance = HighScore.objects.get(pk=pk)
#     serializer = HighScoreSerializer(instance)
#     return Response(serializer.data)

# Или использовать его для сериализации нескольких экземпляров:
# @api_view(['GET'])
# def all_high_scores(request):
#     queryset = HighScore.objects.order_by('-score')
#     serializer = HighScoreSerializer(queryset, many=True)
#     return Response(serializer.data)


#############################
# class AccountSerializer(serializers.HyperlinkedModelSerializer):
#     url = serializers.HyperlinkedIdentityField(
#         view_name='accounts',
#         lookup_field='slug'
#     )
#     users = serializers.HyperlinkedRelatedField(
#         view_name='user-detail',
#         lookup_field='username',
#         many=True,
#         read_only=True
#     )

#     class Meta:
#         model = Account
#         fields = ('url', 'account_name', 'users', 'created')

#############################
# class CommentSerializer(serializers.Serializer):
#     email = serializers.EmailField()
#     content = serializers.CharField(max_length=200)
#     created = serializers.DateTimeField()
    # def validate_title(self, value):
    #     """
    #     Check that the blog post is about Django.
    #     """
    #     if 'django' not in value.lower():
    #         raise serializers.ValidationError("Blog post is not about Django")
    #     return value
    # def validate(self, data):
    #     """
    #     Check that the start is before the stop.
    #     """
    #     if data['start'] > data['finish']:
    #         raise serializers.ValidationError("finish must occur after start")
    #     return data
#############################
# Сериализация объектов,
# serializer = CommentSerializer(comment)
# serializer.data   
# from rest_framework.renderers import JSONRenderer

# json = JSONRenderer().render(serializer.data)
# json
#############################
# Десериализация объектов
# from django.utils.six import BytesIO
# from rest_framework.parsers import JSONParser

# stream = BytesIO(json)
# data = JSONParser().parse(stream)

# Проверка (Validation)
# serializer = CommentSerializer(data=data)
# serializer.is_valid()
# # True
# serializer.errors
# serializer.validated_data
# # {'content': 'foo bar', 'email': 'leila@example.com', 'created': datetime.datetime(2012, 08, 22, 16, 20, 09, 822243)}

#############################
# Update `comment` with partial data
# serializer = CommentSerializer(comment, data={'content': u'foo bar'}, partial=True)

 # если вложенное представление должно быть списком элементов, вы должны передать флаг many = True
#############################
#############################
#############################
# class UserSerializer(serializers.ModelSerializer):
#     profile = ProfileSerializer()

#     class Meta:
#         model = User
#         fields = ('username', 'email', 'profile')

    # def create(self, validated_data):
#         profile_data = validated_data.pop('profile')
#         user = User.objects.create(**validated_data)
#         Profile.objects.create(user=user, **profile_data)
#         return user
    # def update(self, instance, validated_data):
#         profile_data = validated_data.pop('profile')
#         # Unless the application properly enforces that this field is
#         # always set, the follow could raise a `DoesNotExist`, which
#         # would need to be handled.
#         profile = instance.profile

#         instance.username = validated_data.get('username', instance.username)
#         instance.email = validated_data.get('email', instance.email)
#         instance.save()

#         profile.is_premium_member = profile_data.get(
#             'is_premium_member',
#             profile.is_premium_member
#         )
#         profile.has_support_contract = profile_data.get(
#             'has_support_contract',
#             profile.has_support_contract
#          )
#         profile.save()

#         return instance

#############################
# Валидаторы
# def multiple_of_ten(value):
#     if value % 10 != 0:
#         raise serializers.ValidationError('Not a multiple of ten')

# class GameRecord(serializers.Serializer):
#     score = IntegerField(validators=[multiple_of_ten])

# class EventSerializer(serializers.Serializer):
#     name = serializers.CharField()
#     room_number = serializers.IntegerField(choices=[101, 102, 103, 201])
#     date = serializers.DateField()

#     class Meta:
#         # Each room only has one event per day.
#         validators = UniqueTogetherValidator(
#             queryset=Event.objects.all(),
#             fields=['room_number', 'date']
#         )

