FROM node:12.18.3-alpine3.12 as build
COPY . /app
WORKDIR /app

RUN npm install
RUN npm build
RUN npm install express

EXPOSE 80

CMD ["node", "/app/app.js"]

