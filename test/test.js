'use strict';
var assert = require('assert');
var exec = require('child_process').exec;
var isCouch = require('../index');

it('Should recognise couchdb is running - promise', function(done) {
  isCouch().then(function(db) {
    assert.equal(db.running, true);
    assert.equal(db.type, 'couchdb');
    done();
  });
});
it('Should recognise couchdb is running - callback', function(done) {
  isCouch(function(db) {
    assert.equal(db.running, true);
    assert.equal(db.type, 'couchdb');
    done();
  });
});
it('Should return running when run from bash', function(done) {
  exec('node ./bin/is-couch', function(err, stdout, stderr) {
    assert.equal(stdout.indexOf('Up') > -1, true);
    done();
  });
});