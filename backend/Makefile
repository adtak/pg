.PHONY: dev
dev:
				uv run fastapi dev app/main.py

.PHONY: format
format: black ruff

.PHONY: black
black:
				uv run black app/*

.PHONY: ruff
ruff:
				uv run ruff check app/* --no-cache --fix

.PHONY: mypy
mypy:
				uv run mypy .

.PHONY: test
test:
				uv run pytest
