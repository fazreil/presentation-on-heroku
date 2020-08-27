FROM node:10

RUN mkdir /opt/presentation/

WORKDIR /opt/presentation/

COPY deck.mdx .
COPY package-lock.json .
COPY package.json .

RUN npm install

EXPOSE 80

CMD npm start