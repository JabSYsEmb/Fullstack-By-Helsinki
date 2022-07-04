FROM alpine:3.14

COPY ./script.sh .

RUN ls -la .

EXPOSE 8080

RUN apk add --no-cache nodejs yarn &&\
		chmod +x ./script.sh

VOLUME /home/projects

WORKDIR /home/projects/.

ENTRYPOINT ["/bin/sh","/script.sh"]
