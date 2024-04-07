FROM node:18.18-alpine

ENV HOST=0.0.0.0
ENV PORT=3000

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

CMD ["yarn", "dev"]

EXPOSE 3000
