FROM node:10

WORKDIR /usr/src/app

COPY  package*.json ./

RUN npm install

COPY . .

# development
#CMD [ "npm", "run", "dev"]


# production
RUN npm run build

CMD [ "npm", "start"]