FROM node:slim

WORKDIR /home/app

COPY ./package*.json .

RUN npm install

RUN npm install -g serve

ENTRYPOINT ["npm","run","build"]
