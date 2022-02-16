import random
from django.contrib.auth.models import User
from rest_framework import viewsets, views, status
from rest_framework.response import Response

from .models import Product, Listing, Location
from .producer import publish
from .serializers import ProductSerializer, LocationSerializer


class LocationViewSet(viewsets.ModelViewSet):
    serialize_class = LocationSerializer
    queryset = Location.objects.all()


class ProductViewSet(viewsets.ViewSet):
    def list(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        publish('hello', 'world')
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
        try:
            pass
        except:
            return Response(
                {'error': 'Something went to wrong when listing show'},
                status=status.HTTP_400_BAD_REQUEST
            )

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
            if Listing.objects.filter(slug=slug).exists():
                return Response(
                    {'error': 'The slug already exists'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            address = data['address']
            city = data['city']
            state = data['state']
            zipcode = data['zipcode']
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
            if bedrooms <= 0 or bedrooms >= 0:
                bedrooms = 1.0
            bedrooms = round(bathroom, 1)

            sale_type = data['sale_type']
            if sale_type == 'FOR_RENT':
                sale_type = 'For Rent'
            else:
                sale_type = 'For Sale'

            home_type = data['home_type']
            if home_type == 'HOUSE':
                home_type = 'House'
            elif home_type == 'CONDO':
                home_type = 'Condo'
            else:
                home_type = 'Townhouse'
            photo = data['photo']
            gallery = data['gallery']
            is_publish = data['is_publish']
            if is_publish == 'True':
                is_publish = True
            else:
                is_publish = False
            is_available = data['is_available']
            if is_available == 'True':
                is_available = True
            else:
                is_publish = False
            created_date = data['created_date']

            Listing.objects.create(
                realtor=realtor,
                title=title,
                address=address,
                city=city,
                state=state,
                zipcode=zipcode,
                description=description,
                photo=photo,
                gallery=gallery,
                created_date=created_date,
                is_publish=is_publish,
                is_available=is_available,
                home_type=home_type,
                sale_type=sale_type,
                bedrooms=bedrooms,
                bathroom=bathroom
            )
            return Response(
                {'success': 'Listing created successfully.'},
                status=status.HTTP_201_CREATED
            )
        except:
            return Response(
                {'error': 'something went to wrong when creating listing'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
