;(function () {
  'use strict'

  var dezonkey
  var dezorse

  if (typeof module !== 'undefined' && module.exports) {
    dezonkey = require('dezonkey')
    dezorse = require('dezorse')
  } else {
    dezonkey = window.dezonkey
    dezorse = window.dezorse
  }

  function dez (fn, next) {
    return function () {
      var args = Array.prototype.slice.call(arguments)
      var cb = args[args.length - 1]
      args[args.length - 1] = dezorse(cb, next)
      var zonkeySafe = dezonkey(fn)
      zonkeySafe.apply(null, args)
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = dez
  } else {
    window.dez = dez
  }
}())
