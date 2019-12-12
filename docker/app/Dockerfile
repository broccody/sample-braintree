FROM ubuntu:16.04

RUN apt-get update && apt-get install -y \
    sudo \
    curl \
    vim \
    nano \
    net-tools \
    apt-utils \
    git

RUN apt-get update && apt-get install -y python-software-properties \
    && curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash - \
    && apt-get install -y nodejs

RUN apt-get update && apt-get install -y ffmpeg

RUN npm install -g pm2