# Creating a new Oracle JET Plugin

Take a look at the Cookbook to browse the components.

http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html

For this example, I will add the [Input Number component](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=inputNumber&demo=inputNumber) to an APEX page as a plugin.

You can download and install this demo application here:
- [App f100 export](ld)

# Contents
- [Add the JET Input Number to an APEX page](add-the-jet-input-number-to-an-apex-page)
- [Wrap the JET Input Number in an APEX Plugin](wrap-the-jet-input-number-in-an-apex-plugin)

## Add the JET Input Number to an APEX page
Add a new input item in a new region. Put the following in the **region text**.

```html
<input id="inputnumber-id"/>
```

Create the following static file and upload it to your **static application files**.

## widget.jetInputNumber.js

```javascript
require(['ojs/ojcore', 'jquery', 'ojs/ojinputnumber'],
function(oj, $)
{
    $('#inputnumber-id').ojInputNumber({'value': 10, 'max':100, 'min':0, 'step':2});
});
```

## Loading Files

To make it work, we need to load the file above and the Alta UI css file.

### JavaScript File URLs
```
[require jet]#APP_IMAGES#widget.jetInputNumber.js
```

### CSS File URLs
```
#IMAGE_PREFIX#libraries/oraclejet/2.0.2/css/libs/oj/v2.0.2/alta/oj-alta-notag-min.css
```

Well done, you've just added your first JET component on your APEX page!

## Wrap the JET Input Number in an APEX Plugin

To make this item reusable across applications, we wrap our code in a plugin.

Settings:
- Name: JET Input Number
- Internal name: JET.INPUT_NUMBER
- Render procedure: render

### Render procedure
```sql
procedure render (
    p_item   in            apex_plugin.t_item,
    p_plugin in            apex_plugin.t_plugin,
    p_param  in            apex_plugin.t_item_render_param,
    p_result in out nocopy apex_plugin.t_item_render_result )
is
begin
    
    htp.prn('<input id="' || p_item.name || '"/>');
    
    apex_javascript.add_onload_code (
        p_code => 'jetInputNumber.init({id: "' || p_item.name || '"});',
        p_key  => 'jetInputNumber' );
  
end render;
```

### File URLs to load

#### CSS
```
#IMAGE_PREFIX#libraries/oraclejet/2.0.2/css/libs/oj/v2.0.2/alta/oj-alta-notag-min.css
```

### JavaScript
```
[require jet]#PLUGIN_FILES#widget.jetInputNumber.js
```

The file `widget.jetInputNumber.js` is changed a little bit to receive the item ID as a parameter.

```javascript
var jetInputNumber = {
  init: function(options) {
    require(['ojs/ojcore', 'jquery', 'ojs/ojinputnumber'], function(oj, $) {
        $('#' + options.id).ojInputNumber({'value': 10, 'max':100, 'min':0, 'step':2});
    });
  }
};
```

Upload this file in your plugin.

Well done, now you're ready to use the plugin!

Ofcourse, this is the most basic plugin and you should add more properties in the plugin to make it useful.
