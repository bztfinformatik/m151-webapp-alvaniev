# get a node image
FROM node:lts-alpine

# install the npm package http-server
# http-server is a simple web-server for static content
# purpose: serving JS-bundle (vue application) and other static content of the frontend
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (vue dependencies)
COPY package*.json ./

# install vue dependencies
RUN npm install

# copy project files and folders to the current working directory ('app' folder)
COPY . .

# build vue application
# built is copied into directory dist
RUN npm run build

EXPOSE 8080

# start http-sever with document root 'dist'
CMD [ "http-server", "dist" ]