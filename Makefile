build:
	make build-python && make build-typescript

build-python:
	cd src/python && python3 setup.py sdist bdist_wheel

build-typescript:
	cd src/typescript && npm ci && npm run build

clean:
	make clean-python && make clean-typescript

clean-python:
	cd src/python && git clean -xdf

clean-typescript:
	cd src/typescript && git clean -xdf

deploy:
	echo 'TODO'

deploy-python:
	cd src/python && python3 -m twine upload dist/*

deploy-typescript:
	echo 'TODO'
