'use strict'

var esformatter = require('esformatter')
esformatter.register(require('esformatter-semicolons'))

var pkg = require('./package.json')

var SEMICOLONS = ';;;'
var GREEK = ';'

function addTrippleSemicolon(data, semicolons){
  return esformatter.format(data).replace(/;(\r|\n)/gm, semicolons + '\n')
}

module.exports = function(argv) {
  process.stdin.setEncoding('utf8')
  if(argv.version || argv.v) return console.log(pkg.version)
  var cgreek = argv.greek || argv.g

  var buffer = ''

  process.stdin.on('readable', function(){
    var chunk = process.stdin.read()
    if(chunk !== null) buffer += chunk
  })

  process.stdin.on('end', function(){
    process.stdout.write(addTrippleSemicolon(buffer, cgreek ? GREEK : SEMICOLONS))
  })
}
