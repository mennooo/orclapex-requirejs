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

    function createNotification(options) {
      return function(msg) {
        new Noty({
          text: msg,
          type: options.type
        }).show();
      };
    };

    deferred.resolve({
      message: {
        info: createNotification({
          type: 'info'
        }),
        success: createNotification({
          type: 'success'
        }),
        warning: createNotification({
          type: 'warning'
        }),
        error: createNotification({
          type: 'error'
        })
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

    function createNotification(options) {
      return function(msg) {
        new pnotify({
          text: msg,
          type: options.type
        });
      };
    };

    deferred.resolve({
      message: {
        info: createNotification({
          type: 'info'
        }),
        success: createNotification({
          type: 'success'
        }),
        warning: createNotification({
          type: 'notice'
        }),
        error: createNotification({
          type: 'error'
        })
      }
    });

  });

  // return the public objects of this module
  return deferred.promise();

});
