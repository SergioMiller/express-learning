.PHONY: up
up: ## Start dev environment
		docker compose -f docker-compose.yml up

.PHONY: build
build:
		docker compose -f docker-compose.yml build

.PHONY: stop
stop:
		docker compose stop

.PHONY: app
app:
		docker compose exec node bash
