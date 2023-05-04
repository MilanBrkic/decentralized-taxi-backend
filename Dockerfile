# Specify the base image
FROM node:18-alpine AS base

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the TypeScript files
RUN npm run build

# Set the command to start the application
CMD ["npm", "run", "dev"]
