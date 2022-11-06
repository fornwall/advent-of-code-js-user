#!/bin/sh
set -e -u

docker build --tag aoc-js .
docker run -v $PWD:/src/ aoc-js

