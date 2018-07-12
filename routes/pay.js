var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	if (req.session.user) {
		res.render('pay', {
			user: req.session.user.connected
		});
	} else {
		res.render('pay');
	}
});

router.post('/', function(req, res, next) {
	var stripe = require("stripe")(
		"sk_test_8wvNaHZbOntAvBJrCt5QxhWN"
	);
	const token = req.body.id_token;
	var price = req.body.price.split('.').join("")
	stripe.charges.create({
		amount: price,
		currency: 'eur',
		source: token,
		receipt_email: 'alexandre.betourne.pro@gmail.com'
	}, function(err) {
		if (err) {
			res.render('pay', {
				user: req.session.user.connected,
				error: err.message
			});
		} else {
			res.redirect('/confirm');
		}
	})

});

module.exports = router;