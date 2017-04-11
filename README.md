# apex-requirejs
Sample project to demonstrate the usage of RequireJS in APEX 5.1+

APEX 5.1 uses Oracle JET as their chart engine. Oracle JET uses RequireJS as their module dependency loader.

## Why

The main goal of RequireJS is to let you work with small JavaScript modules in an application that uses lots of JavaScript code.
The benefits of this approach is to create reusable pieces of code and create a single point of definition.

There are other ways to create JavaScript modules but RequireJS removes the hassle with tracking dependencies between modules. The order of loading the modules (which are JavaScript files) is no longer relevant.

## Basics

This is how RequireJS works.

### Creating modules
The first step is to create separate modules.

```javascript
// module1.js
define([], function() {

  // return public objects of this module
  return {
    text: "Hell world!"
  }
};
```

The define function is part of RequireJS. Now use this module inside another module.

```javascript
// module2.js

// Load module1 as a dependency to this module
define(['module1'], function(module1) {

  function helloWorld() {
    console.log(module1.text);
  };

  // return public objects of this module
  return {
    helloWorld: helloWorld
  }
};
```

### Creating the main entry point
To glue thing together we create our main file which uses the modules. This is the starting point for RequireJS to load all depending modules.

```javascript
// main.js

// Require modules and execute some code
require(['module2'], function(module2) {

  module2.helloWorld();
  
};
```

### Adding RequireJS to a page

To use main.js in our page, we have to load a script. This is the external RequireJS library which you can download on the requirejs.org website.

```html
<script src="scripts/require.js"></script>
```

Finally we have to configure RequireJS and specify where our `main.js` file can be found.

```html
<script>
require.config({
  baseUrl: "/another/path"
});
</script>
```

The baseUrl must refer to the path where `main.js`, `module1.js` and `module2.js` can be found.

## RequireJS in APEX for Oracle JET charts

For now, only the charts of Oracle JET charts are used in APEX. Oracle JET uses RequireJS. 
When using these charts, APEX does everything for you:

1. Add require.js to page
2. Add requirejs.jetConfig.js to page
3. Add widget.jetChart.js to serve as the main starting point

In `requirejs.jetConfig.js` you can find the `require.config` call.

In addition, several CSS files are loaded to make the charts look good. This is not a part of RequireJS.
### oj-alta-notag-min.css

Oracle JET uses the **Alta UI** system. **Alta UI** styles the JET framework.

### Core.css
In `core.css` you can find for instance a loading call to BarChart.css
```css
@import url('core/BarChart.css');
```

These files contain some specific styling for the individual JET components.

## Additional support for RequireJS in APEX

### PLSQL packages for RequireJS

#### APEX_JAVASCRIPT
Documentation: http://docs.oracle.com/database/apex-5.1/AEAPI/APEX_JAVASCRIPT.htm#AEAPI534 

- APEX_JAVASCRIPT.ADD_LIBRARY
- APEX_JAVASCRIPT.ADD_REQUIREJS
- APEX_JAVASCRIPT.ADD_REQUIREJS_DEFINE

It's not likely you will need these procedures to work with RequireJS because there is a better way, using File URLs.

## File URLs

You can load additional JavaScript files at several places:

- User interface attributes
- Plugin
- Page

In APEX 5.1 there is a new to reference them:

```
[require jet]/myjs/main.js

[require requirejs]/myjs/main.js
```

For full documentation, check the help text in APEX.

## JavaScript functions for RequireJS

### apex.server.loadScript
Documentation: http://docs.oracle.com/database/apex-5.1/AEAPI/apex-server-namespace.htm#AEAPI-GUID-BE3207FA-E766-4F0D-9665-7CF6631E7430

This function can load a module and attach it to the global scope.

If the optimizer is used, then no attachment to global.

### apex.widget.jet (undocumented)
Purpose: Initializing a JET chart

Not needed in general.


## Creating an Oracle JET Plugin

For more information about creating a new Oracle Jet Plugin, take a look in this section

[Creating a new Oracle JET Plugin](docs/jet-plugin.md)

Take a look at the Cookbook to browse the components.



## Creating your own modules

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

