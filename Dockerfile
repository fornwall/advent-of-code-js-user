FROM ubuntu:23.04
RUN apt-get update && \
    apt-get install --no-install-recommends --yes npm
WORKDIR /src
ENTRYPOINT ["/bin/sh", "-c", "npm install && NODE_OPTIONS=--experimental-vm-modules npm test"]
