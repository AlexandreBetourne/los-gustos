var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('profile', {
		firstName: 'Jacquie',
		lastName: 'Vdqkjqsd',
		email: 'apiqjd@djdjd.de',
		adress: '10 rue blaa',
		postal: 75011,
		city: 'Paris'
	});
});

module.exports = router;