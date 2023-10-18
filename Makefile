create_dirs:
	mkdir -p docs/site_libs/api

copy_files:
	cp functions/api/submit.js docs/site_libs/api/submit.js

all: create_dirs copy_files
