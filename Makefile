#
# Boilerplate Project
#

PWD = "/Users/mks/upwork/boilerplate"
PROJECT = "Boilerplate"

all: build

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
	cp -rf ${PWD}/web/build/. ${PWD}/desktop/src/app/.; \
	node ${PWD}/buildscript.js; \
  # cp ${PWD}/web/build/bundle.*.js ${PWD}/desktop/src/app/bundle.js; \
	# cp ${PWD}/web/build/polyfills.*.js ${PWD}/desktop/src/app/polyfills.js; \
	# cp ${PWD}/web/build/sw.js ${PWD}/desktop/src/app/sw.js; \
	# cp ${PWD}/web/build/style.*.css ${PWD}/desktop/src/app/style.css; \

build_desktop: prepare_desktop;
	@echo "Building the Desktop App ${PROJECT}..."; \
	cp -rf ${PWD}/web/src/assets/icons ${PWD}/desktop/src/app/icons; \
	cd ${PWD}/desktop; \
	electron-forge make --platform=darwin; \
	#electron-icon-maker --input=${PWD}/web/src/brand/icon.png --output=${PWD}/desktop/src/app/; \
	#electron-forge make --platform=win32;
	#electron-forge make --platform=linux; \

prepare_mobile: build_desktop;
	@echo "Preparing for the Mobile App ${PROJECT}..."; \
	cp -rf ${PWD}/desktop/src/app/. ${PWD}/mobile/www/.; \

build_mobile: prepare_mobile;
	@echo "Building for the Mobile App ${PROJECT}..."; \

build: build_mobile;
	@echo "Build done."; \

.PHONY: clean
