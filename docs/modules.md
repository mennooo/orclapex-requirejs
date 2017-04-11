# Creating your own RequireJS modules

The goal is to create a JavaScript library similar to the APEX JavaScript API.

The APEX JavaScript API contains a lot of modules such as:

- apex.page
- apex.server
- apex.util
- apex.widget

In this project we'll build our own using RequireJS:

- demo.message

There are other ways to create JavaScript modules but RequireJS removes the hassle with tracking dependencies between modules. The order of loading the modules (which are JavaScript files) is no longer relevant.

## First module

Wrapping everything into define().

You can set your module dependencies there.

## Attaching the library to the global scope

With RequireJS your modules will only be available within `require` function calls. In APEX this is not what we want. 
We need to make calls to the modules from dynamic actions, plugins, pages, etc. 

If we don't attach the library to the global scope, we always have to use:

```javascript
require(['demo/message'], function (message) {
  message.error("An error message");
});
```

Instead we want this:
```javascript
demo.message.error("An error message");
```

I've added code in `demo.js` to make this possible.

## Setting require.config

Documentation: http://requirejs.org/docs/api.html#config

In the require.config file we can configure where our library is located.

```javascript
requirejs.config({
  paths: {
    demo: gBasePath + 'demo'
  }
});
```

Do not change the `baseUrl`: this will break JET charts. You can have only one active `baseUrl` in your application.

Instead, get the current path of your main script and use that to load the depending modules.

```javascript
function getCurrentScriptUrl() {
  var scripts = document.getElementsByTagName("script");
  // Current script is always the last one
  return scripts[scripts.length-1].src;
}
```

## Changing $(document).ready

An important feature of RequireJS is that modules are loaded asynchronous. This means the modules might not be loaded at $(document).ready. This means calls to `demo.message.error` can fail in dynamic actions that trigger **On Page Load**.

We can delay this event with https://api.jquery.com/jquery.holdready/
