({
  config: {
    "app/addModules": {
      namespace: "demo"
    }
  },
  baseUrl: '.',
  findNestedDependencies: true,
  name: 'app',
  out: "app-build.js",
  optimize: "none",
  paths: {
    "jquery": "lib/jquery"
  },
  shim: {
    "jquery": {
      exports: ["jQuery", "$"]
    }
  }
})
