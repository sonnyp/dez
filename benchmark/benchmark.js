;(function () {
  'use strict'

  var benchmark
  var dez

  if (typeof module !== 'undefined' && module.exports) {
    benchmark = require('benchmark')
    dez = require('../index')
  } else {
    benchmark = window.Benchmark
    dez = window.dezonkey
  }

  function notAsync (cb) {
    cb()
  }

  function callbackFun (cb) {
    notAsync(cb)
  }

  var zafe = dez(callbackFun)

  var suite = new benchmark.Suite('dez')
  suite
  .add('zonkeys and zorses', function () {
    callbackFun(function () {})
  })
  .add('zafe', function () {
    zafe(function () {})
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .run({'async': true})
}())
