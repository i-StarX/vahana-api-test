# Use the official Node.js image as a base
FROM mcr.microsoft.com/playwright:v1.49.1-noble

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Run Playwright tests
CMD ["npm", "run", "tag", "@regression"]
