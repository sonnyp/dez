dez
===

[![Build Status](https://img.shields.io/travis/sonnyp/dez/master.svg?style=flat-square)](https://travis-ci.org/sonnyp/dez/branches)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

dezorse and dezonkey callback style functions.

# Getting started


`npm install dez`

----

```javascript
var dez = require('dez');
```

or

```xml
<script src="node_modules/dez/index.js"></script>
```
```javascript
var dez = window.dez
```

# Usage

```js
// here is a an example of a zucked up function
// releases zorse and zonkey
function delay (time, cb) {
  if (typeof time !== 'number') {
    return cb(new Error(time + ' is not a number'))
  }
  else if (typeof cb !== 'function') {
    throw new Error(cb + ' is not a function')
  }
  setTimeout(cb, time)
}

delay('123', cb) // release zonkey

delay(123) // release zorse

var zafeDelay = dez(delay)
// whatever you do will not release zonkey nor zorse
```

# Example

See [example.js](https://github.com/sonnyp/dez/blob/master/example.js)

# Benchmark

See [benchmark](https://github.com/sonnyp/dez/tree/master/benchmark)

# Test

```
npm install standard
npm test
```
