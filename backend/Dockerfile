FROM node:20-alpine AS build

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN npm install --frozen-lockfile

COPY . .

RUN npm run build

FROM node:20-alpine AS production

WORKDIR /app

COPY package.json .
RUN npm install --only=production --frozen-lockfile

COPY docker-entrypoint.sh .
RUN chmod +x docker-entrypoint.sh

COPY --from=build /app/dist ./dist
COPY --from=build /app/src/config ./src/config
COPY --from=build /app/.env .
COPY --from=build /app/uploads ./uploads

EXPOSE 3000

ENTRYPOINT ["./docker-entrypoint.sh"]
