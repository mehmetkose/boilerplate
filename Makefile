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
	npm install -g ios-deploy; \
	npm install -g electron-compile; \
	# build for linux
	brew install fakeroot; \
	brew install dpkg; \
	brew install rpm; \

run_mobile: ;
	cd ${PWD}/mobile; \
	cordova run ios --target="iPhone-5s"; \

list_emulator_devices: ;
	cd ${PWD}/mobile; \
	cordova emulate ios --list; \

create_icons: clean;
	@echo "Creating icons..."; \
	mkdir -p ${PWD}/web/src/assets/icons/; \
	electron-icon-maker --input=${PWD}/web/src/brand/icon.png --output=${PWD}/web/src/assets/; \

build_web: create_icons;
	@echo "Building Web App ${PROJECT}..."; \
	cd ${PWD}/web; \
	yarn build; \
	cp ${PWD}/web/build/assets/icons/favicon.ico ${PWD}/web/build/favicon.ico; \
	cp ${PWD}/web/build/assets/icons/favicon.ico ${PWD}/web/src/assets/favicon.ico; \

prepare_desktop: build_web;
	@echo "Preparing for the Desktop App ${PROJECT}..."; \
	rm -rf ${PWD}/desktop/src/app/; \
	mkdir -p ${PWD}/desktop/src/app/; \
  cp ${PWD}/web/build/bundle.*.js ${PWD}/desktop/src/app/bundle.js; \
	cp ${PWD}/web/build/polyfills.*.js ${PWD}/desktop/src/app/polyfills.js; \
	cp ${PWD}/web/build/sw.js ${PWD}/desktop/src/app/sw.js; \
	cp ${PWD}/web/build/style.*.css ${PWD}/desktop/src/app/style.css; \

build_desktop: prepare_desktop;
	@echo "Building the Desktop App ${PROJECT}..."; \
	cd ${PWD}/desktop; \
	electron-icon-maker --input=${PWD}/web/src/brand/icon.png --output=${PWD}/desktop/src/app/; \
	electron-forge make --platform=darwin; \
	#electron-forge make --platform=linux; \

.PHONY: clean
