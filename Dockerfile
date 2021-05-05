FROM nginx:alpine
ARG PUBLIC_PATH=./public/en
COPY $PUBLIC_PATH /usr/share/nginx/html
