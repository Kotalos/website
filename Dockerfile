# Build stage
FROM node:20.12.2-alpine3.18 AS build
WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Use pnpm for deterministic, clean installs
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile
COPY . .

# Build with standalone output
RUN pnpm build

# Production stage - use much smaller base image
FROM node:20.12.2-alpine3.18 AS production
ENV NODE_ENV=production
WORKDIR /app

# Copy the standalone output (includes server.js)
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

# Security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 && \
    chown -R nodejs:nodejs /app

USER nodejs:nodejs

EXPOSE 3000
CMD ["node", "./server.js"]