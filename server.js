var express = require('express');
var app = express();
var path = require('path');

const bodyParser = require('body-parser');
const url = 'mongodb://159.203.42.253:27017'
var router = express.Router();

var logger = function(req, res, next) {
  next();
}
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient
var db
MongoClient.connect(url, (err, client) => {
  if (err) {
    return console.log(err);
  } else {
    console.log('Conected to mongo url, ', url);
    db = client.db('test')
    app.listen(3100, () => {
      console.log('listening on 3000')
    })
  }
});

app.get('/api/reviews', (req, res) => {
  console.log("connected")
  db.collection('reviews').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
    res.json(result);
  })

});

app.use(logger);
app.use(express.static(path.join(__dirname, 'build')));

// app.listen(3000, function() {
//   console.log('server stared on port 3000')
// });
