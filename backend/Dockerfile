# 🔹 Stage 1: Build stage (Compiles TypeScript)
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files first (optimizes caching)
COPY package.json package-lock.json ./

# Install production and dev dependencies for TypeScript build
RUN npm install

# Copy the source code
COPY . .

# Compile TypeScript
RUN npm run build

# 🔹 Stage 2: Production stage (Runs built app only)
FROM node:18-alpine AS production

WORKDIR /app

# Copy only the built app from the build stage
COPY --from=build /app/dist ./dist
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Expose backend port
EXPOSE 4000

# Run the compiled app
CMD ["node", "dist/src/index.js"]
