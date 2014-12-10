'use strict'

var trippleSemicolon = require('../')
var pkg = require('../package.json')

var SEMICOLONS = ';;;'
var GREEK = ';'

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
    process.stdout.write(trippleSemicolon(buffer, cgreek ? GREEK : SEMICOLONS))
  })
}
