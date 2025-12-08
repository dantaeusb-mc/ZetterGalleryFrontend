# Common build stage
FROM node:24.11 as init-build-stage

ARG RUNNING_USER=1000

RUN if [ "$RUNNING_USER" != 1000 ] ; \
    then groupadd --gid $RUNNING_USER zetter \
    && useradd --uid $RUNNING_USER --gid zetter --shell /bin/bash --create-home zetter ; \
    else echo "Running as node" ; \
fi

# RUN apt-get install libc6-compat
# Bcrypt dependencies & user dirty fix
RUN apt-get update && apt-get install -y build-essential

FROM init-build-stage as dependencies-stage

ARG RUNNING_USER=1000
WORKDIR /app

RUN chown -R $RUNNING_USER:$RUNNING_USER /app
COPY --chown=$RUNNING_USER package*.json .npmrc* ./

USER $RUNNING_USER

RUN npm ci

# Production build stage
FROM dependencies-stage as production-build-stage

ARG RUNNING_USER=1000
ARG NODE_ENV=production
WORKDIR /app
ENV NODE_ENV $NODE_ENV

COPY --from=dependencies-stage /app/node_modules ./node_modules
COPY --chown=$RUNNING_USER ./ ./

USER $RUNNING_USER

RUN npm run build

# Production run stage
FROM production-build-stage as production-run-stage

ARG RUNNING_USER=1000
ARG NODE_ENV=production
WORKDIR /app
ENV NODE_ENV $NODE_ENV

COPY --from=production-build-stage --chown=$RUNNING_USER /app/public ./public
COPY --from=production-build-stage --chown=$RUNNING_USER /app/.next/standalone ./
COPY --from=production-build-stage --chown=$RUNNING_USER /app/.next/static ./.next/static

USER $RUNNING_USER

ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]

# Dvelopment single stage
FROM dependencies-stage as development-run-stage

ARG RUNNING_USER=1000
ARG NODE_ENV=production
WORKDIR /app
ENV NODE_ENV $NODE_ENV

ADD --chown=$RUNNING_USER ./ ./

USER $RUNNING_USER

ENV NODE_ENV development

CMD ["npm", "run", "dev"]