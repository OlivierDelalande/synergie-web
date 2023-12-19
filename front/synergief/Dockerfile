# Stage 1: Build the Angular app
FROM node:latest as build
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve the app with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/synergief /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/nginx.conf

