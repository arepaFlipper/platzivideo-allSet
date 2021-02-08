FROM node:12

COPY ["./curso-backend-for-frontend","/usr"]

WORKDIR /usr

RUN npm i --only=production
RUN npm update
RUN npm audit fix
RUN npm rebuild node-sass

EXPOSE 3000

CMD ["npm", "run", "start:dev"]