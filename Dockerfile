ARG DOCKER_DIRECTUS_VERSION=10.11.0

FROM directus/directus:${DOCKER_DIRECTUS_VERSION}

USER root
RUN corepack enable 

USER node

# change this to include more packages. example: RUN pnpm add package1 && pnpm add package2
RUN pnpm add directus-extension-api-docs directus-extension-schema-management-module directus-extension-schema-sync

COPY ./schema-sync ./schema-sync