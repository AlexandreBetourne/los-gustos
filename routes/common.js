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

module.exports = router;