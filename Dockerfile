FROM nginx:latest

RUN apt-get update
RUN apt-get -y install npm 