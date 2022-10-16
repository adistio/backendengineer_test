FROM node:16

RUN apt-get update && apt-get install -y \
    nano \
    git \
    curl

# Create app directory
WORKDIR /usr/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json .

RUN npm install --quiet
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3030
CMD [ "node", "index.js" ]