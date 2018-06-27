var express = require('express');
var router = express.Router();


router.get('/about', function(req, res, next) {
	res.render('about');
});

router.get('/contact', function(req, res, next) {
	res.render('contact');
});

router.get('/legal', function(req, res, next) {
	res.render('legal');
});

router.get('/logout', function(req, res, next) {
	var session = req.session
	session.user = {
		lastName: '',
		firstName: '',
		email: '',
		password: '',
		adress: '',
		city: '',
		post: ''
	}
	res.redirect('/');
});

module.exports = router;