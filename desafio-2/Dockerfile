FROM node:13.14.0-alpine3.10
LABEL developers="Renato Moitinho <renato.dias@b2wdigital.com>"
WORKDIR /tmp
COPY ["package*.json","database.sqlite", "./"]
COPY dist/ ./dist
RUN npm install
EXPOSE 3000
CMD npm run start:prod