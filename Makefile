SHELL = /bin/bash
.SHELLFLAGS = -c

.ONESHELL:
upload:
	npm run build
	aws s3 sync ./public s3://zyrahbernardino.com

.PHONY: upload