build:
	make build-python && make build-ruby && make build-typescript

build-python:
	cd src/python && python3 setup.py sdist bdist_wheel

build-ruby:
	cd src/ruby && gem build kielbasa.gemspec

build-typescript:
	cd src/typescript && npm ci && npm run build

clean:
	make clean-python && make-clean-ruby && make clean-typescript

clean-python:
	cd src/python && git clean -xdf

clean-ruby:
	cd src/ruby && git clean -xdf

clean-typescript:
	cd src/typescript && git clean -xdf

deploy:
	echo 'TODO'

deploy-python:
	cd src/python && python3 -m twine upload dist/*

deploy-ruby:
	cd src/ruby && gem push kielbasa-0.0.1.gem

deploy-typescript:
	echo 'TODO'
