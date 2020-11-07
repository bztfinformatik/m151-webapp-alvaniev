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

# build vue application in directory 'dist'
RUN npm run build

EXPOSE 8080

# start http-sever
# dist = document-root
# -P http://localhost:8088? = catch-all redirect (for futur use)
CMD [ "http-server", "dist", "-P", "http://localhost:8088?" ]