#
# Boilerplate Project
#

PWD = "/Users/mks/upwork/boilerplate"
PROJECT = "Boilerplate"

all: build_desktop

clean: ;
	@echo "Cleaning..."; \
	rm -rf web/build/;\
	rm -rf desktop/out/;\

install: ;
	@echo "Installing dependencies..."; \
	npm install -g electron-icon-maker; \

build_web: clean;
	@echo "Building Web App ${PROJECT}....."; \
	cd ${PWD}/web; \
	yarn build; \
	cp ${PWD}/web/build/assets/icons/favicon.ico ${PWD}/web/build/favicon.ico; \
  cd ..; \

prepare_desktop: build_web;
	@echo "Preparing for the Desktop App ${PROJECT}....."; \
	cd ${PWD}; \
  mkdir -p desktop/src/app/; \
  cp web/build/bundle.*.js desktop/src/app/bundle.js; \
	cp web/build/polyfills.*.js desktop/src/app/polyfills.js; \
	cp web/build/sw.js desktop/src/app/sw.js; \
	cp web/build/style.*.css desktop/src/app/style.css; \
	electron-icon-maker --input=${PWD}/web/build/icon.png --output=${PWD}/desktop/src/; \

build_desktop: prepare_desktop;
	@echo "Building the Desktop App ${PROJECT}....."; \
	cd ${PWD}/desktop; \
	electron-forge make --platform=darwin; \
	cd ..; \

.PHONY: clean
