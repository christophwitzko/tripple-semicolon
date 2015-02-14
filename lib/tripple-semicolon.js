'use strict'

var esformatter = require('esformatter')
esformatter.register(require('esformatter-semicolons'))

var SEMICOLONS = ';;;'
var GREEK = ';'

module.exports = function (data, greek) {
  if (data.charAt(data.length - 1) !== '\n') data += '\n'
  return esformatter.format(data).replace(/;(\r|\n)/gm, (greek ? GREEK : SEMICOLONS) + '\n')
}
