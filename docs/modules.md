# Creating your own RequireJS modules

The goal is to create a JavaScript library similar to the APEX JavaScript API.

The APEX JavaScript API contains a lot of modules such as:

- apex.page
- apex.server
- apex.util
- apex.widget

In this project we'll build our own:

- demo.message



### First module

Wrapping everything into define().

You can set your module dependencies there.

### Setting require.config

Do not change the BasePath: this will break JET charts.

Instead, get the current path of your main script and use that to load the depending modules.

```javascript
function getCurrentScriptUrl() {
  var scripts = document.getElementsByTagName("script");
  // Current script is always the last one
  return scripts[scripts.length-1].src;
}
```

### Changing $(document).ready

An important feature of RequireJS is that modules are loaded asynchronous. This means the modules might not be loaded at $(document).ready. We can delay this event with https://api.jquery.com/jquery.holdready/
