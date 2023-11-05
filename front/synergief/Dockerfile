FROM node:18-alpine as build
WORKDIR /usr/src/app
RUN npm run build
COPY package.json package-lock.json ./
RUN npm install
COPY . .


FROM nginx:1.17.1-alpine
EXPOSE 80
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/synergief /usr/share/nginx/html