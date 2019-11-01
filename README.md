# Projeto base para construção de aplicações frontend do Labtic

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Project workflow

```
assets: svgs and images
components: where the components of the application are created, both base and specify components.
modules: vuex modules of the aplication, where you keep their global store and share information between components.
plugins: plugins such as vuetify(used to define its uses)
services: folder to keep the api calls, separated by modules.
utils: place to keep funcionalities that might be use anywhere of the project.
views: main place to keep the views of the aplication, used mainly by routes.
```
