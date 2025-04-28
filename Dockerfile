# Base stage for building the application
FROM node:23-alpine AS builder
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copy source code and build the application
COPY . .
RUN pnpm build

# Production stage
FROM node:23-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy built assets and dependencies from builder
COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Install pnpm and production dependencies, setup security
RUN npm install -g pnpm && \
    pnpm install --prod --frozen-lockfile && \
    npm uninstall -g pnpm && \
    rm -rf /root/.npm /root/.pnpm-store /root/.cache

# Set correct permissions
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001 -G nodejs
USER nextjs

EXPOSE 3000
CMD ["pnpm", "start"]