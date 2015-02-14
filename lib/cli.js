'use strict'

var fs = require('fs')
var trippleSemicolon = require('../')

var help = function () {
  /*
  Usage:
    tripple-semicolon <options> -- <file>

  Options:
    -w, --overwrite     Overwrite the input file
    -o, --output <file> Write output to file
    -v, --version       Output the current version
    -h, --help          Output this help info
  */
}.toString().split(/\n/).slice(2, -2).join('\n')

module.exports = function (argv) {
  process.stdin.setEncoding('utf8')
  if (argv.version || argv.v) return console.log(require('../package.json').version)
  if (argv.help || argv.h) return console.log(help)
  var gmode = argv.greek || argv.g
  var inputFile = argv._.shift()
  if (fs.existsSync(inputFile) && fs.statSync(inputFile).isFile()) {
    var formatted = trippleSemicolon(fs.readFileSync(inputFile).toString(), gmode)
    var wfile = (argv.w || argv.overwrite) ? inputFile : ''
    var output = argv.o || argv.output
    if (output) wfile = output
    if (wfile) {
      console.log('writing to', wfile)
      return fs.writeFileSync(wfile, formatted)
    }
    return process.stdout.write(formatted)
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
