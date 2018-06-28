var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	if (req.session.user) {
		res.render('confirm', {
			user: req.session.user.connected
		});
	} else {
		res.render('confirm');
	}
});

module.exports = router;