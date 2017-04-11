# apex-requirejs
Sample project to demonstrate the usage of RequireJS in APEX 5.1+

## How it works in APEX

APEX 5.1 uses Oracle JET as their chart engine. Oracle JET uses RequireJS as their module dependency loader.

This is how it works.

### Loading files



### PLSQL packages for RequireJS

APEX_JAVASCRIPT

## JavaScript functions for RequireJS

apex.server.loadScript

apex.widget.jet

### 

## Creating an Oracle JET plugin

Take a look at the Cookbook to browse the components.

### Loading Oracle JET
- use file prefix: [require jet]/myjs/main.js

### Loading CSS
- Add CSS See: https://apex.oracle.com/i/themes/theme_42/1.1/css/core/BarChart.css

## Creating your own modules

### First module

Wrapping everything into require()

### Setting require.config

### Changing $(document).ready

An important feature of RequireJS is that modules are loaded asynchronous. This means the modules might not be loaded at $(document).ready. We can delay this event with https://api.jquery.com/jquery.holdready/

