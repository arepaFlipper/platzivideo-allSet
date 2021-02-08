FROM node

WORKDIR /srv/app/

COPY ./platzi-auth-passport/movies-api /srv/app

RUN npm install

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "index.js"]