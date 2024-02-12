# Common build stage
FROM node:18.19 as init-build-stage

ARG RUNNING_USER=1000

RUN if [ "$RUNNING_USER" != 1000 ] ; \
    then groupadd --gid $RUNNING_USER zetter \
    && useradd --uid $RUNNING_USER --gid zetter --shell /bin/bash --create-home zetter ; \
    else echo "Running as node" ; \
fi

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# But we're on using debian base container, so we dobn't need it
# Also we install musl below lol
# RUN apt-get install libc6-compat

# Bcrypt dependencies & user dirty fix
RUN apt-get update && apt-get install -y build-essential

# Some other dep uses this lib (I'm thinking I've been using it for graphics libs?)
RUN apt-get install -y musl musl-dev
RUN ln -s /usr/lib/arm64-linux-musl/libc.so /lib/libc.musl-arm64.so.1

FROM init-build-stage as dependencies-stage

ARG RUNNING_USER=1000

RUN mkdir -p /app
RUN chown -R $RUNNING_USER:$RUNNING_USER /app
WORKDIR /app

COPY --chown=$RUNNING_USER package*.json ./

# Production install stage
FROM dependencies-stage as production-install-stage

ARG RUNNING_USER=1000
WORKDIR /app

USER $RUNNING_USER

RUN npm ci

# Production build stage
FROM production-install-stage as production-build-stage

ARG RUNNING_USER=1000
WORKDIR /app

USER $RUNNING_USER
ADD --chown=$RUNNING_USER ./ ./

RUN npm run build

# Production run stage
FROM production-build-stage as production-run-stage

WORKDIR /app
ENV NODE_ENV production

USER $RUNNING_USER

COPY --from=production-build-stage --chown=$BUILD_UID /app/public ./public
COPY --from=production-build-stage --chown=$BUILD_UID /app/.next/standalone ./
COPY --from=production-build-stage --chown=$BUILD_UID /app/.next/static ./.next/static

CMD ["node", "server.js"]

# Dvelopment single stage
FROM dependencies-stage as development-run-stage

ARG RUNNING_USER=1000
WORKDIR /app
ADD --chown=$RUNNING_USER ./ ./

USER $RUNNING_USER

ENV NODE_ENV development

CMD ["npm", "run", "dev"]