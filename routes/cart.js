var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('cart', {
		user: req.session.user.connected
	});
});

module.exports = router;