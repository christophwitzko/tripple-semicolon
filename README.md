# tripple-semicolon

## Install tripple-semicolon

    $ npm install -g tripple-semicolon

## CLI usage

    $ tripple-semicolon index.js > index2.js

**use stdin**

    $ cat index.js | tripple-semicolon > index2.js

### Greek Mode

    $  cat index.js | tripple-semicolon -g > index2.js

## Module usage

```javascript
var trippleSemicolon = require('tripple-semicolon')
var out = trippleSemicolon('console.log(a);\n')
console.log(out) // logs "console.log(a);;;"
```
## Licence

The [MIT License (MIT)](http://opensource.org/licenses/MIT)

Copyright © 2014 [Christoph Witzko](https://twitter.com/christophwitzko)
