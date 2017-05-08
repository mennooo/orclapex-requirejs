/*

  Multiple configs are merged by RequireJS
  So when Oracle JET is loaded, it set's its baseUrl to: apex_img_dir + "libraries/"

  We cannot overwrite this value.

  Therefore, we are bound to use full paths instead of relative paths

*/

(function() {

  // Get our current baseUrl
  function getBaseUrl() {
    var scripts = document.getElementsByTagName("script"),
        script = scripts[scripts.length-1].src,
        slugs = script.split('/');

    slugs.pop();

    return slugs.join('/') + '/';
  }

  var baseUrl = getBaseUrl();

  requirejs.config({
    paths: {
      lib: baseUrl + 'lib',
      app: baseUrl + 'app'
    }
  });

})();
