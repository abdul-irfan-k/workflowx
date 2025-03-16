# Base image with Node.js 20
FROM node:20-slim AS base

# Enable pnpm globally
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Build Stage
FROM base AS build
COPY . /usr/src/app
WORKDIR /usr/src/app

# Install dependencies with caching
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# Build the service
RUN pnpm run -r build

# Deploy the apps
# RUN pnpm deploy --filter=@workflowx/logger --prod /prod/packages/logger
RUN pnpm deploy  --legacy --filter=@workflowx/user-service --prod /prod/user-service

# Runtime Stage for app1
FROM base AS user-service
COPY --from=build /prod/user-service /prod/user-service
WORKDIR /prod/user-service
EXPOSE 3000
CMD [ "pnpm", "start" ]

