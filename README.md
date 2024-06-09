# Quasar App with Highcharts (quasar-project-w-highcharts)

A Quasar Project with displaying of Hicharts diagrams and map.

Quasar is a framework for scaffolding Vue.js applications.
It provides a config file quasar.config.js to setup the behaviour of your application.

Bootstrapping plugins or modules is a bit cumbersome and requires a bit of tweaking, that's why I made this project.

The Highcharts docs tells you to import the module and just use <highcharts :options="..."></highcharts>

This is not the case with quasar. You have to add it like you did with plain JS. When setting up Highcharts, you assign the element name in the creating function

```
Highcharts.chart("elementname", {...})
```

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
