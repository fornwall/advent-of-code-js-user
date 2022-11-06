FROM ubuntu:22.10
RUN apt-get update && \
    apt-get install --no-install-recommends --yes npm
WORKDIR /src
ENTRYPOINT ["/bin/sh", "-c", "npm install && npm test"]
