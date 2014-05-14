var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// // var routes = require('./rts');
// var users = require('./rts/user');

var app = express();

var Laptop = require('./models/laptop.js');
mongoose.connect('mongodb://localhost/store');
require('./models/laptop');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', function callback(){
   /* var laptop = new Laptop({
        price: 100,
        hardDriveSize: 50,
        memorySize: 6,
        screenSize: 15
    })
    laptop.save(function(err,laptops){
        if(err) return console.error(err);
    });
    console.log(laptop);*/
});
//laptop = new Laptop();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);




// app.get('/', routes.index);
// app.get('/users', users.list);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.render('error', {
        message: err.message,
        error: {}
    });
});

require('./routes')(app);

module.exports = app;
