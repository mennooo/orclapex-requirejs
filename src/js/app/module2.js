/*

  A dummy module to show the basic code to create a module

*/

define(function() {

  // Every module is a jQuery Promise, even if nothing asynchonous happens
  // This way you can write every module the same way and you don't have to worry about $.ready
  var deferred = $.Deferred();

  // Set the contents of this module on resolve
  deferred.resolve({
    module2: "This module doesn't do anything.."
  });

  // return the public objects of this module as a promise
  return deferred.promise();

});
