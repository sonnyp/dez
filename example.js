;(function () {
  'use strict'

  var dez
  var asap

  // Node.js, browserify, ...
  if (typeof module !== 'undefined' && module.exports) {
    dez = require('./index') // require('dez') for you
    asap = require('asap') // not required, dez defaults to setTimeout
  // browsers
  } else {
    dez = window.dez
    asap = window.asap
  }

  // here is a an example of a zucked up function
  // releases zorse and zonkey
  function log (prefix, message, cb) {
    if (typeof prefix !== 'string') {
      return cb(new Error(prefix + ' is not a string'))
    }

    if (typeof message !== 'string') {
      throw new Error(message + ' is not a string')
    }

    console.log(prefix + ': ' + message)
    cb()
  }

  // let's dezorse and dezonkey
  var safeLog = dez(log, asap)

  console.log('before')
  safeLog('prefix', 123, function (err) {
    console.log(err)
  })
  safeLog(123, 'message', function (err) {
    console.log(err)
  })
  console.log('after')
}())
