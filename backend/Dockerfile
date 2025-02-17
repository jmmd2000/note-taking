FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --only=production

COPY . .
RUN npm run build

EXPOSE 4000
CMD ["node", "dist/src/index.js"]