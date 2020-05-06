FROM node:14.1-alpine
LABEL developers="Renato Moitinho <renato.dias@b2wdigital.com>"
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm build
COPY src ./src
EXPOSE 3000
CMD npm start