build:
	make build-typescript

build-typescript:
	cd src/typescript && npm ci && npm run build

clean:
	make clean-typescript

clean-typescript:
	cd src/typescript && git clean -xdf
