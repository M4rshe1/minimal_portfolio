sudo apt install git npm -y
git pull

npm install
npm run build

sudo docker-compose up -d --force-recreate
