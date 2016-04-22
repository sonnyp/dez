'use strict'

var dez = require('./index')
var assert = require('assert')

function zuckedUp (foo, bar, cb) {
  if (typeof foo !== 'string') {
    return cb('foo')
  }

  if (typeof bar !== 'string') {
    throw 'bar' // eslint-disable-line
  }

  cb()
}

var zafe = dez(zuckedUp)

assert.doesNotThrow(function () {
  zafe('foo', 123, function () {})
})

var called = false
zafe(123, 'foo', function (err) {
  called = true
  assert.equal(err, 'foo')
})
assert.equal(called, false)

setTimeout(function () {
  assert.equal(called, true)
})

function zony (cb) {
  cb('foo')
  cb('bar')
}
var dezony = dez(zony)
var i = 0

dezony(function () {
  i++
})

setTimeout(function () {
  assert.equal(i, 1)
})
