var express = require('express');
var router = express.Router();
var database = require('../services/database.js');


router.get('/', function(req, res, next) {
	if (req.session.user) {
		res.render('signup', {
			user: req.session.user.connected
		});
	} else {
		res.render('signup');
	}
});

router.post('/', function(req, res, next) {
	database.sendQuery('INSERT INTO user (lastname, firstname, email, password, adress, city, postal) VALUES ("' + req.body.lastname + '", "' + req.body.firstname + '", "' + req.body.email + '", "' + req.body.password + '", "' + req.body.adress + '", "' + req.body.city + '","' + req.body.post + '")', function(err, results) {
		if (err) {
			console.log(err)
		} else {
			var session = req.session
			session.user = {
				connected: true,
				lastName: req.body.lastname,
				firstName: req.body.firstname,
				email: req.body.email,
				password: req.body.password,
				adress: req.body.adress,
				city: req.body.city,
				post: req.body.post
			}
			res.redirect('/');
		}
	})
});

module.exports = router;