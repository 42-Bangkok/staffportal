# Tag & trigger github actions to build and push docker image
release:
	ver=$(shell date +%Y.%m.%d.%s) &&\
	echo $$ver &&\
	git tag -a $$ver -m "Release $$ver" &&\
	git push origin $$ver
test: test-build
test-build:
	docker build -t staffportal:latest .
	docker rmi staffportal:latest
