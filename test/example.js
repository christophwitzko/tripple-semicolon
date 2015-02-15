var app = require('app')

app.use(function (req, res, next) {
  console.log(req.path)
  next()
})

app.all('/', function (req, res) {
  for (var i = 0; i < 10; i++) {
    res.send('my cool app ' + i)
  }
})
