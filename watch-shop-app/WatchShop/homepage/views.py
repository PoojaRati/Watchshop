
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Watches
from .serializers import WatchesSerializer
from rest_framework import status
#get list of watches
@api_view(['GET'])
def get_watches(request):
    watches=Watches.objects.all()
    serializers=WatchesSerializer(watches,many=True)
    return Response(serializers.data,status=status.HTTP_200_OK)

#create watch list
@api_view(['POST'])
def create_watches(request):
    serializer=WatchesSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


