/*

  Module for clientside messages

  Based on pnotify
  or
  Based on noty


*/


// load the noty library
/*define(['lib/noty'], function() {

  var deferred = $.Deferred();

  // The library has added itself as requireJS module so now let's use it
  require(['Noty'], function(Noty){

    // make sure other modules cannot access Noty directly
    require.undef('Noty');

    deferred.resolve({
      message: {
        info: function(msg) {
          new Noty({
            type: 'info',
            text: msg,
          }).show();
        }
      }
    });

  });

  // return the public objects of this module
  return deferred.promise();

});*/


define(['lib/pnotify.custom'], function() {

  var deferred = $.Deferred();

  // The library has added itself as requireJS module so now let's use it
  require(['pnotify', 'jquery'], function(pnotify, $){

    // make sure other modules cannot access Noty directly
    require.undef('pnotify');

    deferred.resolve({
      message: {
        info: function(msg) {
          new pnotify({
            text: msg,
          });
        }
      }
    });

  });

  // return the public objects of this module
  return deferred.promise();

});
