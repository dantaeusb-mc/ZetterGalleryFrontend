# Common build stage
FROM node:18 as init-stage

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# But we're on using debian base container, so we dobn't need it
# Also we install musl below lol
# RUN apt-get install libc6-compat

# Update npm to newer version to match host
RUN npm install -g npm@8

# Bcrypt dependencies & user dirty fix
RUN apt-get update && apt-get install -y build-essential python2.7
RUN npm config set unsafe-perm true

# Some other dep uses this lib (I'm thinking I've been using it for graphics libs?)
RUN apt-get install -y musl musl-dev
RUN ln -s /usr/lib/arm64-linux-musl/libc.so /lib/libc.musl-arm64.so.1

FROM init-stage as prepare-stage

RUN mkdir -p /app
WORKDIR /app

COPY package*.json ./

# Production install stage
FROM prepare-stage as production-install-stage

WORKDIR /app
RUN npm ci

# Production build stage
FROM production-install-stage as production-build-stage

WORKDIR /app
COPY . .
RUN npm run build

# Production run stage
FROM production-build-stage as production-run-stage

WORKDIR /app

ENV NODE_ENV production

CMD ["node", "server.js"]

# Dvelopment single stage
FROM prepare-stage as development-run-stage

WORKDIR /app
RUN npm install

ENV NODE_ENV development

CMD ["npm", "run", "dev"]