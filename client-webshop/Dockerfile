#
# Build stage
#
FROM node:18-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./

RUN npm install

COPY . .
RUN npm run build

#
# Package stage
#
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
