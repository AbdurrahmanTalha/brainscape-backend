FROM node:18-alpine

WORKDIR /app

COPY . .

RUN yarn install

COPY .env.example .env

RUN yarn build

EXPOSE 8000

CMD ["yarn", "start"]
