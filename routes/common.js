var express = require('express');
var router = express.Router();


router.get('/about', function(req, res, next) {
	if (req.session.user) {
		res.render('about', {
			user: req.session.user.connected
		});
	} else {
		res.render('about');
	}
});

router.get('/contact', function(req, res, next) {
	if (req.session.user) {
		res.render('contact', {
			user: req.session.user.connected
		});
	} else {
		res.render('contact');
	}
});

router.get('/legal', function(req, res, next) {
	if (req.session.user) {
		res.render('legal', {
			user: req.session.user.connected
		});
	} else {
		res.render('legal');
	}
});

router.get('/createaccount', function(req, res, next) {
	if (req.session.user) {
		res.render('createaccount', {
			user: req.session.user.connected
		});
	} else {
		res.render('createaccount');
	}
});

router.get('/logout', function(req, res, next) {
	req.session.user = {
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