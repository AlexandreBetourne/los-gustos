var express = require('express');
var router = express.Router();

var stripe = require("stripe")(
	"sk_test_8wvNaHZbOntAvBJrCt5QxhWN"
);

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
	const token = req.body.stripeToken;
	// const charge = stripe.charges.create({
	// 	amount: 999,
	// 	currency: 'eur',
	// 	source: 'token',
	// 	receipt_email: 'alexandre.betourne.pro@gmail.com',
	// });
	// res.json(req.body)
	res.redirect('/confirm');
});

module.exports = router;