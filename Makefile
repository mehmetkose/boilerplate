#
# My Fancy Node.js project
#

PROJECT = "Boilerplate"


all: build_desktop

clean: ;
	@echo "Cleaning..."; \

build_web: ;
	@echo "Building Web App ${PROJECT}....."; \
	cd web; \
  yarn build; \
  cd ..; \

prepare_desktop: build_web;
	@echo "Preparing for the Desktop App ${PROJECT}....."; \
  mkdir -p desktop/src/app/; \
  cp web/build/bundle.*.js desktop/src/app/bundle.js; \
	cp web/build/polyfills.*.js desktop/src/app/polyfills.js; \
	cp web/build/style.*.css desktop/src/app/style.css; \

build_desktop: prepare_desktop;
		@echo "Building the Desktop App ${PROJECT}....."; \
	  cd desktop; \
		electron-forge make --platform=darwin; \
		cd ..; \


.PHONY: clean
