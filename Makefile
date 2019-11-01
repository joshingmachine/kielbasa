build:
	make build-python;
	make build-ruby;
	make build-rust;
	make build-typescript;

build-python:
	cd python && python3 setup.py sdist bdist_wheel

build-ruby:
	cd ruby && gem build kielbasa.gemspec

build-rust:
	cd rust && cargo build

build-typescript:
	cd typescript && npm ci && npm run build

clean:
	make clean-python;
	make clean-ruby;
	make clean-rust;
	make clean-typescript;

clean-python:
	cd python && git clean -xdf

clean-ruby:
	cd ruby && git clean -xdf

clean-rust:
	cd rust & git clean -xdf

clean-typescript:
	cd typescript && git clean -xdf

deploy:
	make deploy-python;
	make deploy-ruby;
	make deploy-rust;
	make deploy-typescript;

deploy-python:
	cd python && python3 -m twine upload dist/*

deploy-ruby:
	cd ruby && gem push kielbasa-0.0.1.gem

deploy-rust:
	cd rust && cargo publish

deploy-typescript:
	echo 'TODO'
