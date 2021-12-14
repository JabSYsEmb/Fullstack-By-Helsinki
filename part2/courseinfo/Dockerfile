FROM ubuntu:18.04

COPY . /root/app/

EXPOSE 3000

RUN apt-get update &&\
		apt-get install -y npm	&&\
		npm build

# CMD ["npm","start"]
