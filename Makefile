# Tag & trigger github actions to build and push docker image
release:
	ver=$(shell date +%Y.%m.%d.%s) &&\
	echo $$ver &&\
	git tag -a $$ver -m "Release $$ver" &&\
	git push origin $$ver
