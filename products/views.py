import random

from rest_framework import viewsets, views, status
from rest_framework.response import Response

from .models import Product, User, Listing
from .producer import publish
from .serializers import ProductSerializer


class ProductViewSet(viewsets.ViewSet):
    def list(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        publish()
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, request):
        serializer = ProductSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def retrieve(self, request, pk=None):
        product = Product.objects.get(id=pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def update(self, request, pk=None):
        product = Product.objects.get(id=pk)
        serializer = ProductSerializer(instance=product, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

    def destroy(self, request, pk=None):
        product = Product.objects.get(id=pk)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class UserAPIView(views.APIView):
    def get(self, _):
        users = User.objects.all()
        user = random.choice(users)
        return Response({
            'id': user.id
        })


class ManageListingView(views.APIView):
    def get(self, request):
        pass

    def post(self, request):
        try:
            user = request.user
            if not user.is_superuser:
                return Response(
                    {'error': 'Use does not have permissions for creating this listing data'},
                    status=status.HTTP_403_FORBIDDEN
                )
            data = request.data
            realtor = data['realtor']
            title = data['title']
            slug = data['slug']
            address = data['address']
            city = data['city']
            state = data['state']
            zip = data['zip']
            description = data['description']
            price = data['price']
            try:
                price = int(price)
            except:
                return Response(
                    {'error': 'Price must be integer'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            bedrooms = data['bedrooms']
            try:
                bedrooms = int(bedrooms)
            except:
                return Response(
                    {'error': 'bedrooms must be integer'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            bathroom = data['bathroom']
            try:
                bathroom = float(bathroom)
            except:
                return Response(
                    {'error': 'bathroom must be float'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            if bedrooms <= 0 or bathroom >= 0:
                bedrooms = 1.0

            sale_type = data['sale_type']
            home_type = data['home_type']
            photo = data['photo']
            gallery = data['gallery']
            is_publish = data['is_publish']
            is_available = data['is_available']
            created_date = data['created_date']

        except:
            return Response(
                {'error': 'something went to wrong when creating listing'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
