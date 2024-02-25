FROM node:20-alpine as builder
WORKDIR /app/

COPY package.json yarn.lock ./

RUN yarn install --immutable

FROM node:20
WORKDIR /app/
COPY                package.json yarn.lock  ./
COPY --from=builder /app/node_modules/ ./node_modules/
COPY . .

EXPOSE 3456
ENV NODE_ENV production
ENV PORT 3456

RUN yarn build
