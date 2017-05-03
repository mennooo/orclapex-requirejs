({
  baseUrl: '.',
  findNestedDependencies: false,
  name: 'demo',
  out: "demo-build.js",
  optimize: "none",
  shim: {
    "jquery": {
      exports: ["jQuery", "$"]
    },
      "jQuery": {
        exports: ["jquery", "$"]
      }
  },
  wrapShim: true,
  keepAmdefine: true
})
