sudo apt inatall git npm nodejs docker docker-compose -y

git pull

npm install
npm run build

sudo docker-compose up -d --build --force-recreate
