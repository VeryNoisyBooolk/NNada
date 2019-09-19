FROM node:buster

WORKDIR /

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . .

EXPOSE 3000
