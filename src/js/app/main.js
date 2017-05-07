/*

  We require all the modules we will use in this app in advance
  This way we can attach all modules to a global namespace

  We will not require anything from the lib directly, only modules in the app may require those

*/



// this module must be present before loading the others
define(['app/addModules'], function (addModules) {

  function setNamespace(namespace) {
    requirejs.config({
      config: {
        "app/addModules": {
          namespace: namespace
        }
      }
    });
  };

  return {
    addModules: addModules,
    setNamespace: setNamespace
  };

});
