FROM node:8-alpine

COPY package.json /app/
RUN cd /app/ && npm install && npm install -g @angular/cli

COPY . /app/
RUN cd /app/ && ng build --prod

EXPOSE 8000

CMD cd /app/ && node index.js

