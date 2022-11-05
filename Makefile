generate:
	./generate-tests-from-aoc.py > src/generated.test.js

test:
	npm test

.PHONY: generate test

