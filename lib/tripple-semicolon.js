'use strict'

var esformatter = require('esformatter')
esformatter.register(require('esformatter-semicolons'))

var SEMICOLONS = ';;;'
var GREEK = ';'

module.exports = function (data, greek) {
  return esformatter.format(data + '\n').replace(/;(\r|\n)/gm, (greek ? GREEK : SEMICOLONS) + '\n')
}
