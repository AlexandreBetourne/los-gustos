var express = require('express');
var router = express.Router();
var database = require('../services/database.js');


router.get('/', function(req, res, next) {
	res.render('signup');
});

router.post('/', function(req, res, next) {
	database.sendQuery('INSERT INTO user (lastname, firstname, email, password, adress, city, postal) VALUES ("' + req.body.lastname + '", "' + req.body.firstname + '", "' + req.body.email + '", "' + req.body.password + '", "' + req.body.adress + '", "' + req.body.city + '","' + req.body.post + '")', function(err, results) {
		if (err) {
			console.log(err)
		} else {
			res.redirect('/');
		}
	})
});

module.exports = router;