'use strict';
var exec = require('child_process').exec;
var http = require('http');
var Q = require('q');

module.exports = function(callback) {
  var deferred = Q.defer();
  var result = {
    type: 'couchdb'
  };
  http.get({
    hostname: '127.0.0.1',
    port: 5984
  }, function(res) {
    var status = res.statusCode;
    result.running = status >= 200 && status < 300 || status === 304 ? true : false;
    this.emit('close');
  }).on('error', function() {
    result.running = false;
  }).on('close', function() {
    if (callback) callback(result);
    deferred.resolve(result);
  });
  return deferred.promise;
};
