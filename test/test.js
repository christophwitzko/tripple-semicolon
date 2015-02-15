'use strict'

var fs = require('fs')

var test = require('tape')

var trippleSemicolon = require('../')

test('tripple-semicolon', function (t) {
  t.plan(1)
  var example = fs.readFileSync(__dirname + '/example.js').toString()
  var exampleCompare = fs.readFileSync(__dirname + '/example-tripple-semicolon.js').toString()
  t.equal(trippleSemicolon(example), exampleCompare, 'equal')
})
