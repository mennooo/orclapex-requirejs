# Creating a new Oracle JET Plugin

Take a look at the Cookbook to browse the components.

http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html

For this example, I will add the [Input Number component](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=inputNumber&demo=inputNumber) to an APEX page as a plugin.

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


