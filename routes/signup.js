var express = require('express');
var router = express.Router();
var database = require('../services/database.js');
var bcrypt = require('bcrypt');


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
	database.sendQuery(`SELECT email FROM user`, function(err, results) {
		if (err) {
			console.log(err)
		} else {
			var check_exist = 0;
			for (let i = 0; i < results.length; i++) {
				results[i].email == req.body.email ? check_exist++ : check_exist
			}
			if (check_exist == 1) {
				res.render('signup', {
					email_error: "Email déja utilisé"
				});
			} else {
				bcrypt.hash(req.body.password, 10, function(err, hash) {
					database.sendQuery(`INSERT INTO user (lastname, firstname, email, password, adress, city, postal, phone) VALUES (" ${req.body.lastname} ", "${req.body.firstname}", "${req.body.email}", "${hash}", "${req.body.adress}", "${req.body.city}","${req.body.post}","${req.body.phone}")`, function(err, results) {
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
								post: req.body.post,
								phone: req.body.phone
							}
							res.redirect('/');
						}
					})
				});
			}
		}
	})
});

module.exports = router;