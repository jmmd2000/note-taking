#!/bin/sh

echo "Running database migrations..."
npx drizzle-kit push

echo "Starting the backend..."
npm run start