FROM node:18.2.0-alpine3.15 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.25.1-alpine3.17-slim

COPY --from=build /app/build /usr/share/nginx/html
RUN sed -i 's/listen       80;/listen       8080;/g' /etc/nginx/conf.d/default.conf
ARG NGINX_PORT=8080
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
