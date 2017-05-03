/*

  Module to add all required modules to a global namespace

*/

define('app/addModules',[],function(){

  var demo = window.demo || {};

  $.holdReady( true );

  return function() {

    // Add all modules under demo namespace
    $.when.apply($, Array.from(arguments)).then(function(modules) {

      $.extend(demo, modules);
      $.holdReady( false );

    }, function(e) {
      console.log("Not all modules could be loaded");
    });
  }

});

/*

  We require all the modules we will use in this app in advance
  This way we can attach all modules to a global namespace

  We will not require anything from the lib directly, only modules in the app may require those

*/

// this module must be present before loading the others
require(['app/addModules'], function (addModules) {

  // require all modules in this nested call
  require(['app/message'], addModules);

});

define("demo", function(){});

