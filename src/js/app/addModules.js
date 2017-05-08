/*

  Module to add all required modules to a global namespace

*/

define(['module'], function(module){

  return function() {

    // Get current namespace
    window[module.config().namespace] = {};
    var namespace = window[module.config().namespace];

    // Add all modules under demo namespace
    $.when.apply($, Array.from(arguments)).then(function() {
      
      var modules = Array.from(arguments);

      modules.forEach(function(module){
        $.extend(namespace, module);
      });

      $.holdReady( false );
      console.log("RequireJS loading time: ", performance.now() - window.starttime);

    }, function(e) {
      console.log("Not all modules could be loaded");
    });
  }

});
