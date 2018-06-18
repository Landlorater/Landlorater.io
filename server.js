var express = require('express');
var app = express();
var path = require('path');


var logger = function(req, res, next)  {
  next();
}
app.use(logger);
app.use(express.static(path.join(__dirname, 'build')));

app.listen(3000, function() {
  console.log('server stared on port 3000')
});
