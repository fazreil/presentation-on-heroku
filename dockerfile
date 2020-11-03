FROM node:10

RUN mkdir /opt/presentation/

WORKDIR /opt/presentation/

COPY deck.mdx .
COPY package.json .
COPY component/ component/

RUN npm install

EXPOSE $PORT

CMD npm start
