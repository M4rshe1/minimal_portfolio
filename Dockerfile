FROM ubuntu:latest
COPY . /app
WORKDIR /app

RUN apt install nodejs npm -y
RUN npm install express

EXPOSE 80

CMD ["node", "/app/app.js"]

