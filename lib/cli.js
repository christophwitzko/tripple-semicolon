'use strict'

var fs = require('fs')
var trippleSemicolon = require('../')
var pkg = require('../package.json')

module.exports = function (argv) {
  process.stdin.setEncoding('utf8')
  if (argv.version || argv.v) return console.log(pkg.version)
  var gmode = argv.greek || argv.g
  var inputFile = argv._.shift()
  if (fs.existsSync(inputFile) && fs.statSync(inputFile).isFile()) {
    var fileContent = fs.readFileSync(inputFile).toString()
    process.stdout.write(trippleSemicolon(fileContent, gmode))
    return
  }

  var buffer = ''
  process.stdin.on('readable', function () {
    var chunk = process.stdin.read()
    if (chunk !== null) buffer += chunk
  })

  process.stdin.on('end', function () {
    process.stdout.write(trippleSemicolon(buffer, gmode))
  })
}
