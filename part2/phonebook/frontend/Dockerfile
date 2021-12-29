FROM node:14

WORKDIR /root/app/

COPY . .

EXPOSE 3000

RUN npm install -g npm@8.3.0

RUN npm install --silent

# ENTRYPOINT npm install

CMD ["npm","start"]
