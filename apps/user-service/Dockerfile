FROM node:latest as base

WORKDIR /home/node/app

RUN npm install -g pnpm

COPY package.json  ./

RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "dev"]