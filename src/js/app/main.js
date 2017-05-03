/*

  We require all the modules we will use in this app in advance
  This way we can attach all modules to a global namespace

  We will not require anything from the lib directly, only modules in the app may require those

*/



// this module must be present before loading the others
define(['app/addModules'], function (addModules) {

  return {
    addModules: addModules,
    setNamespace: function(namespace) {
      requirejs.config({
        config: {
          "app/addModules": {
            namespace: namespace
          }
        }
      });
    }
  };

});
