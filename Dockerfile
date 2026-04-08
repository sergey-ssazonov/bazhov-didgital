FROM node:18-alpine AS base

# Зависимости
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

RUN \
if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
elif [ -f package-lock.json ]; then npm ci; \
elif [ -f pnpm-lock.yaml ]; then corepack enable && pnpm install --frozen-lockfile; \
else echo "Lockfile not found." && exit 1; \
fi

# Сборка
FROM base AS builder
WORKDIR /app

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN \
if [ -f yarn.lock ]; then yarn build; \
elif [ -f package-lock.json ]; then npm run build; \
elif [ -f pnpm-lock.yaml ]; then corepack enable && pnpm run build; \
else echo "Lockfile not found." && exit 1; \
fi

# Production
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# если нужно и в runtime тоже
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

RUN chown -R nextjs:nodejs ./

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]