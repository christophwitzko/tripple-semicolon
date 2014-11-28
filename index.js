'use strict'

var pkg = require('./package.json')

module.exports = function(argv) {
  if (argv.version || argv.v) return console.log(pkg.version)
}