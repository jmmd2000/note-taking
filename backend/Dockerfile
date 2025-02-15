FROM node:latest

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .

# app binds to port 4000 so use EXPOSE to have it mapped by the docker daemon
EXPOSE 4000

CMD ["node", "index.js"]