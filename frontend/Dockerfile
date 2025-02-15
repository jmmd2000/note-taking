FROM node:latest

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

# install serve to serve the static files
RUN npm install -g serve

CMD ["serve", "-s", "build", "-l", "3000"]
EXPOSE 3000