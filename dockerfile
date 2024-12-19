# Use official Node.js image
FROM node:16-slim

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy application dependency manifests
COPY package*.json ./

# Install production dependencies
RUN npm install --only=production

# Copy local code to the container image
COPY . .

# Run the web service on container startup
EXPOSE 8080

# Define the command to start the app
CMD [ "npm", "start" ]