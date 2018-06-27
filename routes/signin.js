var express = require('express');
var router = express.Router();
var database = require('../services/database.js');


router.get('/', function(req, res, next) {
	res.render('signin');
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
				res.redirect(url.format({
					pathname: "/profile",
					query: {
						"a": 1,
						"b": 2,
						"valid": "your string here"
					}
				}));
			}
		}
	})


});

module.exports = router;