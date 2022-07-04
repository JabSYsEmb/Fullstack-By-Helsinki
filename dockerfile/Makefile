all:
	docker image rm -f website_runner
	docker system prune
	docker build . -t website_runner
