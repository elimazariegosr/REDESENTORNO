FROM node:14.15.4

# Create app directory
WORKDIR /usr/src/app
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV


# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json  /usr/src/app

RUN npm install && npm install typescript -g
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . /usr/src/app

EXPOSE 3001

RUN tsc

CMD [ "node", "./dist/index.js" ]