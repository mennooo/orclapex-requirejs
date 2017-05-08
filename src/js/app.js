/*

  This is the starting point for every application
  You can add any module from the ./app folder and it will be available

*/

$.holdReady( true );
window.starttime = performance.now();

// Start with the main entry point
requirejs(["app/main"], function(main) {

  // Under which namespace should the modules reside
  main.setNamespace("demo");

  // require all modules in this nested call and add them to the namespace
  require(['app/message', 'app/module2'], main.addModules);

});
