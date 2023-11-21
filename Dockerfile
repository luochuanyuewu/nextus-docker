ARG DOCKER_DIRECTUS_VERSION=10.8.1

FROM directus/directus:${DOCKER_DIRECTUS_VERSION}

USER root
RUN corepack enable \
    && corepack prepare pnpm@8.3.1 --activate

USER node

# change this to include more packages. example: RUN pnpm add package1 && pnpm add package2
RUN pnpm add directus-extension-api-docs directus-extension-schema-management-module