FROM node:12

RUN mkdir /app
WORKDIR /app

RUN npm install

COPY ./app .

EXPOSE 8880

CMD [ "node", "server.js" ]

