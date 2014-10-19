# is-couch [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

> Check if a couchdb is running

See the [dbs](https://github.com/charliedowler/dbs) module for more database types.


## Install

```sh
$ npm install --save is-couch
```


## Usage

##### Node.js

```js
var isCouch = require('is-couch');

// Callback
isCouch(function(db) {
  console.log(db.running);
  //=> true
});

// Promise
isCouch().then(function(db) {
  console.log(db.type);
  //=> couchdb
});
```


## CLI

```sh
$ npm install -g is-couch
```

```sh
$ is-couch
#=> Up
```

## Release History
 * 2014-10-20    v0.3.0    Fixed command so it actually works
 * 2014-08-28    v0.2.0    Re-published to fix typos (Broken)
 * 2014-08-27    v0.1.0    Initial release (Broken)

## License

MIT © [Charlie Dowler](http://charliedowler.com)

[npm-url]: https://npmjs.org/package/is-couch
[npm-image]: https://badge.fury.io/js/is-couch.png

[travis-url]: http://travis-ci.org/charliedowler/is-couch
[travis-image]: https://secure.travis-ci.org/charliedowler/is-couch.png?branch=master

[depstat-url]: https://david-dm.org/charliedowler/is-couch
[depstat-image]: https://david-dm.org/charliedowler/is-couch.png
