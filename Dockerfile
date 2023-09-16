# Specify the base image
FROM node:20-alpine AS base

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application files to the container
COPY . .

# Build the TypeScript files
RUN npm run build

FROM node:20-alpine AS production

COPY package*.json .env ./ 

RUN npm ci --only=production
ENV NODE_ENV=development

COPY --from=base /app/build ./build

CMD ["npm", "run", "start"]

