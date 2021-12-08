FROM ubuntu:18.04

COPY . .

EXPOSE 3000

RUN apt-get update &&\
		apt-get install -y npm	&&\
		npm install

CMD ["npm","start"]
