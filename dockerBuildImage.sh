#!/bin/bash
PROJECT_NAME=rf-as-scales-fronted
IMAGE_NAME=czechprz/$PROJECT_NAME
docker build -t $IMAGE_NAME .
docker push $IMAGE_NAME
