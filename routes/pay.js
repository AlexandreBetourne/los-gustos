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
	// stripe.customers.create({
	// 	description: 'Customer for sophia.brown@example.com',
	// 	source: token
	// }, function(err, customer) {
	// 	switch (err.type) {
	// 		case 'StripeCardError':
	// 			res.render('pay', {
	// 				error: err.message
	// 			});
	// 			break;
	// 		case 'RateLimitError':
	// 			res.render('pay', {
	// 				error: err.message
	// 			});
	// 			break;
	// 		case 'StripeInvalidRequestError':
	// 			res.render('pay', {
	// 				error: err.message
	// 			});
	// 			break;
	// 		case 'StripeAPIError':
	// 			res.render('pay', {
	// 				error: err.message
	// 			});
	// 			break;
	// 		case 'StripeConnectionError':
	// 			res.render('pay', {
	// 				error: err.message
	// 			});
	// 			break;
	// 		case 'StripeAuthenticationError':
	// 			res.render('pay', {
	// 				error: err.message
	// 			});
	// 			break;
	// 		default:
	// 			res.render('pay', {
	// 				error: err.message
	// 			});
	// 			break;
	// 	}
	// })

	stripe.charges.create({
		amount: price,
		currency: 'eur',
		source: token,
		receipt_email: 'alexandre.betourne.pro@gmail.com'
	});
	res.redirect('/confirm');
});

module.exports = router;