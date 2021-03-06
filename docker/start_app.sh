#!/bin/bash

docker rm -f braintree-server-nginx
docker rm -f braintree-server-nodejs

docker-compose rm -f

docker-compose build braintree-server-nodejs
docker-compose build braintree-server-nginx

docker-compose up -d braintree-server-nodejs
docker-compose up -d braintree-server-nginx

docker exec -it braintree-server-nodejs bash -c 'npm install --unsafe-perm'

if [ "$1" == "debug" ]; then
    docker exec -it braintree-server-nodejs bash -c "pm2 start app.config.js --only braintree-server-debug"
else
    docker exec -it braintree-server-nodejs bash -c "pm2 start app.config.js --only braintree-server"
fi