var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
	user = req.session.user
	res.render('delivery', {
		user: user.connected,
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email,
		adress: user.adress,
		postal: user.post,
		city: user.city,
		phone: user.phone
	});
});

module.exports = router;