FROM node:alpine

WORKDIR  /usr/app

COPY package.json /usr/app/

COPY server.js /usr/app/

#install the current packages from package.json

RUN npm install

EXPOSE 3000

# the below command is what happens when we run container

CMD ["node","server.js"]