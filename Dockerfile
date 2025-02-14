# Base stage for building the application
FROM node:18-alpine AS builder
WORKDIR /app

# Install pnpm using npm
RUN npm install -g pnpm

# Install dependencies first (layer caching)
COPY pnpm-lock.yaml package.json ./
RUN pnpm install --frozen-lockfile

# Copy source code and build the application
COPY . .
RUN pnpm build

# Production stage
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Install pnpm using npm
RUN npm install -g pnpm

# Copy built assets and dependencies from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Install production dependencies only
RUN pnpm install --prod --frozen-lockfile

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Set correct permissions
RUN chown -R nextjs:nodejs .
USER nextjs

# Expose Next.js default port
EXPOSE 3000

# Start the application
CMD ["pnpm", "start"]