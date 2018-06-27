var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Twig = require('twig');
var mysql = require('mysql')
var session = require('express-session')

var indexRouter = require('./routes/index');
var resultsRouter = require('./routes/results');
var signinRouter = require('./routes/signin');
var signupRouter = require('./routes/signup');
var commonRouter = require('./routes/common');
var cartRouter = require('./routes/cart');
var deliveryRouter = require('./routes/delivery');
var payRouter = require('./routes/pay');
var confirmRouter = require('./routes/confirm');
var profileRouter = require('./routes/profile');

var app = express();

//session
app.set('trust proxy', 1)
app.use(session({
	secret: 'keyboard cat'
}))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));
app.use(cookieParser());
app.use('/static', express.static(__dirname + '/public'));


//ROUTES
app.use('/', indexRouter);
app.use('/', commonRouter);
app.use('/results', resultsRouter);
app.use('/signin', signinRouter);
app.use('/signup', signupRouter);
app.use('/cart', cartRouter);
app.use('/delivery', deliveryRouter);
app.use('/pay', payRouter);
app.use('/confirm', confirmRouter);
app.use('/profile', profileRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;