FROM node:8-alpine

COPY package.json /app/
RUN cd /app/ && npm install -g @angular/cli && npm install

COPY . /app/
RUN cd /app/ && ng build --prod && rm -rf node_modules

EXPOSE 8000

CMD cd /app/ && node index.js

