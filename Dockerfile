FROM node:8-alpine

WORKDIR /app/
COPY . /build/
RUN cd /build/ && \
    npm install && \
    npm run build-prod && \
    rm -rf node_modules && \
    npm cache clean --force && \
    cd /app/ && \
    mv /build/dist . && \
    mv /build/index.js . && \
    rm -rf /build/ && \
    npm install express express-http-proxy
EXPOSE 8000

CMD node index.js

