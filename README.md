# tripple-semicolon

[![Build Status](https://travis-ci.org/christophwitzko/tripple-semicolon.svg?branch=master)](https://travis-ci.org/christophwitzko/tripple-semicolon) [![forthebadge](http://forthebadge.com/images/badges/built-with-swag.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)

## Install tripple-semicolon

    $ npm install -g tripple-semicolon

## Usage

```
Usage:
  tripple-semicolon <options> -- <file>

Options:
  -w, --overwrite     Overwrite the input file
  -o, --output <file> Write output to file
  -v, --version       Output the current version
  -h, --help          Output this help info
```

## Examples

    $ tripple-semicolon index.js > index2.js

**use stdin**

    $ cat index.js | tripple-semicolon > index2.js

### Greek Mode

    $  cat index.js | tripple-semicolon -g > index2.js

## Module usage

```javascript
var trippleSemicolon = require('tripple-semicolon')
var out = trippleSemicolon('console.log(a);')
console.log(out) // logs "console.log(a);;;"
```
## Licence

The [MIT License (MIT)](http://opensource.org/licenses/MIT)

Copyright © 2015 [Christoph Witzko](https://twitter.com/christophwitzko)
