/*

  Multiple configs are merged by RequireJS
  So when Oracle JET is loaded, it set's its baseUrl to: apex_img_dir + "libraries/"

  We cannot overwrite this value.

  Therefore, we are bound to use full paths instead of relative paths

*/



(function() {

  var gBasePath = apex_img_dir + "demo/js/";

  requirejs.config({
    baseUrl: '.',
    paths: {
      lib: gBasePath + 'lib',
      app: gBasePath + 'app'
    }
  });

})();
