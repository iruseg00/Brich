FROM node:14.13.0

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install 

COPY . .

EXPOSE 33133

RUN ["apt-get" , "update"]

CMD ["npm" , "run" , "start:prod"]