# Setting Up Production Environment

## Installation Paths
landlorater.io - /var/www <br />
LetsEncrypt - /opt/letsencrypt

## Running MongoDB in a Dockerized Container
```
$ docker run -p 27017:27017 -v /var/www/data:/data/db --name mongoDB -d mongo
```

## Running Production Server and Build
```
$ pm2 stop server.js
$ npm run build
$ pm2 start server.js
```
