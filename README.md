# pynode-docker-lambda-
Deploy docker lambda node express api on top of python base image
Prerequisite:
docker
aws-cli
sam-cli

Dockerfile to create docker image from base python image
 - app.js is the nodejs express startup file
- server.js => lambda function using serverless-http

Use AWS Sam to build/test and deploy
- sam build => build docker image
- sam local --start-api => starts the api. You can invoke http://localhost:3000 on browser this will invoke lambda function
- sam deploy --guided => This will deploy the application on AWS.Create ECR repository. Create a Lambda Function using Pushed container image.

