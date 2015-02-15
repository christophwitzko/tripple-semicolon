'use strict'

var fs = require('fs')

var test = require('tape')

var trippleSemicolon = require('../')

var example = fs.readFileSync(__dirname + '/example.js').toString()

test('tripple-semicolon tripple', function (t) {
  t.plan(1)
  var exampleCompare = fs.readFileSync(__dirname + '/example-tripple-semicolon.js').toString()
  t.equal(trippleSemicolon(example), exampleCompare, 'equal')
})

test('tripple-semicolon greek', function (t) {
  t.plan(1)
  var exampleCompare = fs.readFileSync(__dirname + '/example-tripple-semicolon-greek.js').toString()
  t.equal(trippleSemicolon(example, true), exampleCompare, 'equal')
})
