# Use the official Node.js image as the base image
FROM node:latest

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash

# Add Bun to the PATH
ENV PATH="/root/.bun/bin:${PATH}"

# Install Python and other necessary dependencies
RUN apt-get update && apt-get install -y python3 build-essential

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and bun.lockb to the container
COPY package.json bun.lockb ./

# Install dependencies using Bun
RUN bun install --no-save --ignore-scripts

# Copy the rest of your application code to the container
COPY . .

# Build your Next.js app
RUN bun run build

# Install 'serve' globally to serve the built application
RUN npm install -g serve

# Expose the port your app will run on (adjust this if needed)
EXPOSE 3000

# Start serving the static files using 'serve'
CMD ["serve", "-s", "out"]