FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

WORKDIR /app/dist

RUN npm install express

EXPOSE 8080

CMD ["node", "/app/dist/app.js"]

