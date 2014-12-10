'use strict'

var esformatter = require('esformatter')
esformatter.register(require('esformatter-semicolons'))

module.exports = function(data, semicolons){
  return esformatter.format(data).replace(/;(\r|\n)/gm, semicolons + '\n')
}
