FROM node

WORKDIR /root/server/

RUN npm install -g json-server

EXPOSE 3000

CMD ["npx","json-server","--port","3000","--watch","./db.json"]
