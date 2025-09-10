.PHONY: dev test
PACKAGES=`go list ./...`

dev:
	@pnpm dev --host

build:
	@pnpm build

test:
	@pnpm test

validate:
	@pnpm validate
