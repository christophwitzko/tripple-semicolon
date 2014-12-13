'use strict'

var trippleSemicolon = require('../')
var pkg = require('../package.json')


module.exports = function(argv) {
  process.stdin.setEncoding('utf8')
  if(argv.version || argv.v) return console.log(pkg.version)

  var buffer = ''

  process.stdin.on('readable', function(){
    var chunk = process.stdin.read()
    if(chunk !== null) buffer += chunk
  })

  process.stdin.on('end', function(){
    process.stdout.write(trippleSemicolon(buffer, argv.greek || argv.g))
  })
}
