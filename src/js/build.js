({
  baseUrl: '.',
  findNestedDependencies: true,
  name: 'app',
  out: "app-build.js",
  paths: {
    "jquery": "lib/jquery"
  },
  shim: {
    "jquery": {
      exports: ["jQuery", "$"]
    }
  }
})
