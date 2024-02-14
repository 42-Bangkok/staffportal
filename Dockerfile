FROM node:20-slim as deps

WORKDIR /app
COPY app/package*.json .
RUN npm install

FROM node:20-slim as builder
# Specify ARG NEXT_PUBLIC_* here if any, so that they are available during build time
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY app .
RUN rm -rf "app/(sample)"
RUN npm run build

FROM node:20-slim as runner
WORKDIR /app
COPY app/next.config.mjs .
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3000
CMD ["npm", "run", "start"]
