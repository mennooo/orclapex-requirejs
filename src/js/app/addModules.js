/*

  Module to add all required modules to a global namespace

*/

define(function(){

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
