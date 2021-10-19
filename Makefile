.PHONY: i
i:
	docker compose run --rm app yarn install

.PHONY: up
up:
	docker compose up

.PHONY: upd
upd:
	docker compose up -d

.PHONY: down
down:
	docker compose down

.PHONY: sh
sh:
	docker compose run --rm app sh

.PHONY: modules
modules:
	docker run --rm -v $PWD:/app -w /app node yarn install

.PHONY: lint
lint:
	docker compose exec app yarn lint

.PHONY: format
format:
	docker compose exec app yarn format
