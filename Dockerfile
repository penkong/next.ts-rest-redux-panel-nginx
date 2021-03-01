# FROM node:alpine


# WORKDIR /app

# COPY package.json .

# RUN npm install

# COPY . .

# # --only=prod
# RUN npm run build --only=prod`



# # stage1 as builder
# FROM node:15.10.0-alpine3.10 as builder
 
# LABEL Author="mazdak nazemi"

# WORKDIR /app

# # copy the package.json to install dependencies
# COPY package.json .

# # Install the dependencies and make the folder

# RUN npm install 

# COPY . .

# # Build the project and copy the files
# RUN npm run build --only=prod 

# RUN npm run export
# # EXPOSE 3000 
# # CMD [ "npm", "run", "start" ]


# # STAGE 2 

# FROM nginx:alpine

# # #!/bin/sh
# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# # ## Remove default nginx index page
# RUN rm -rf /usr/share/nginx/html/*

# # # Copy from the stahg 1
# COPY --from=builder /app/out /usr/share/nginx/html

# EXPOSE 3000 80

# ENTRYPOINT ["nginx", "-g", "daemon off;"]
# # 

# Base on offical Node.js Alpine image
FROM node:alpine

LABEL Author="Mazdak Nazemi"

# Set working directory
WORKDIR /usr/app

# Install PM2 globally
RUN npm install --global pm2

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package.json .


# Install dependencies
RUN npm install 
# --production

# Copy all files
COPY . .

# Build app
RUN npm run build

# Expose the listening port
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

CMD [ "pm2-runtime", "npm", "--", "start" ]