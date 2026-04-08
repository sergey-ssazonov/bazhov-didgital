FROM node:18-alpine AS base

# Устанавливаем зависимости
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Копируем lock-файлы для установки зависимостей
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./ 


RUN \
if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
elif [ -f package-lock.json ]; then npm ci; \
elif [ -f pnpm-lock.yaml ]; then corepack enable && pnpm install --frozen-lockfile; \
else echo "Lockfile not found." && exit 1; \
fi

# Сборка приложения
FROM base AS builder
WORKDIR /app

# Копируем зависимости
COPY --from=deps /app/node_modules ./node_modules
# Копируем весь проект
COPY . .

# Сборка приложения
RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Production stage
FROM base AS runner
WORKDIR /app

# Устанавливаем переменную окружения для production
ENV NODE_ENV=production
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

# Создаем пользователя для запуска приложения
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Копируем необходимые файлы для standalone сборки
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Назначаем владельцем файлы пользователя nextjs
RUN chown -R nextjs:nodejs ./

# Указываем пользователя для контейнера
USER nextjs

# Открываем порт 3000
EXPOSE 3000

# Устанавливаем переменную PORT и запускаем сервер
ENV PORT=3000

CMD ["node", "server.js"]
