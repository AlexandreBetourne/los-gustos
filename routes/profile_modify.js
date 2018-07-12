var express = require('express');
var router = express.Router();
var database = require('../services/database.js');

router.get('/', function(req, res, next) {
	user = req.session.user
	res.render('profile_modify', {
		user: true,
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email,
		adress: user.adress,
		postal: user.post,
		password: user.password,
		city: user.city
	});
});

router.post('/', function(req, res, next) {
	var row = `UPDATE user
  SET firstname = '${req.body.firstname}',
  lastname = '${req.body.lastname}',
  email = '${req.body.email}',
  adress = '${req.body.adress}',
  postal = '${req.body.postal}',
  city = '${req.body.city}'
  WHERE id = ${req.session.user.id}`;
	database.sendQuery(row, function(err, log) {
		if (err) {
			res.render('error', {
				error: err
			});
		} else {
			database.sendQuery(`SELECT * from user WHERE email='${req.body.email}'`, function(err, log) {
				if (err) {
					res.render('error', {
						error: err
					});
				} else {
					req.session.user = {
						connected: true,
						id: log[0].id,
						lastName: log[0].lastname,
						firstName: log[0].firstname,
						email: log[0].email,
						password: log[0].password,
						adress: log[0].adress,
						city: log[0].city,
						post: log[0].postal,
						phone: log[0].phone
					}
					res.redirect('/profile');
				}
			})
		}
	})
});

module.exports = router;