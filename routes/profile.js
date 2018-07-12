var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	user = req.session.user
	res.render('profile', {
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

module.exports = router;