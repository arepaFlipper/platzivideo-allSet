FROM node:12

COPY [".","/usr/"]

WORKDIR /usr

RUN npm i --only=production

EXPOSE 3000

RUN npm run start:dev