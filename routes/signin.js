var express = require('express');
var router = express.Router();
var database = require('../services/database.js');


router.get('/', function(req, res, next) {
	if (req.session.user) {
		res.render('signin', {
			user: req.session.user.connected
		});
	} else {
		res.render('signin');
	}
});

router.post('/', function(req, res, next) {
	database.sendQuery(`SELECT * from user WHERE email='${req.body.email}'`, function(err, log) {
		if (err) {
			console.log(err)
		} else {
			if (req.body.password != log[0].password) {
				res.render('signin', {
					error: 'Mot de passe incorrect'
				});
			} else {
				var session = req.session
				session.user = {
					connected: true,
					lastName: log[0].lastname,
					firstName: log[0].firstname,
					email: log[0].email,
					password: log[0].password,
					adress: log[0].adress,
					city: log[0].city,
					post: log[0].postal,
					phone: log[0].phone
				}
				res.redirect('/');
			}
		}
	})


});

module.exports = router;