FROM node:slim

WORKDIR /home/app

COPY ./package*.json .

RUN npm install

RUN npm install --global nodemon 

EXPOSE 3000

CMD ["npm","run","dev"]
