# Base stage for building the application
FROM node:18-alpine AS builder
WORKDIR /app

# Install pnpm and dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && \
	pnpm install --frozen-lockfile && \
	npm uninstall -g npm

# Copy source code and build the application
COPY . .
RUN pnpm build

# Production stage
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy built assets and dependencies from builder
COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Install pnpm and production dependencies, setup security
RUN npm install -g pnpm && \
	pnpm install --prod --frozen-lockfile && \
	npm uninstall -g npm && \
	addgroup --system --gid 1001 nodejs && \
	adduser --system --uid 1001 nextjs

# Set correct permissions
RUN chown -R nextjs:nodejs .
USER nextjs

# Expose Next.js default port
EXPOSE 3000

# Start the application
CMD ["pnpm", "start"]