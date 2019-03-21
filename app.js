require ('dotenv').config()

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');


var usersRouter = require('./routes/users');
var ordersRouter = require('./routes/orders');
var reviewsRouter = require('./routes/reviews');
var treehousesRouter = require('./routes/treehouses');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors())
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);
app.use('/reviews', reviewsRouter);
app.use('/treehouses', treehousesRouter);

app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers


if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.send({
      message: err.message,
      error: err
    })
  })
}


app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.send({
    message: err.message,
    error: {}
  })
})

module.exports = app;
