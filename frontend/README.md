# mnt-vue2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Build docker image (from project directory root) and container
```
docker build -t vue-frontend -f docker/frontend/Dockerfile frontend
docker run -ti -p 8088:8080 --name vue-frontend-app vue-frontend
```
