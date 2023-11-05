FROM node:18-alpine AS build
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM node:18-alpine
COPY --from=build /app ./
EXPOSE 3000
CMD ["npm", "run", "start:dev"]