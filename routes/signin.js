var express = require('express');
var router = express.Router();
var database = require('../services/database.js');


router.get('/', function(req, res, next) {
	res.render('signin');
});

router.post('/', function(req, res, next) {
	database.sendQuery('INSERT INTO user (email) VALUES ("' + req.body.email + '")', function(err, results) {
		if (err) {
			console.log(err)
		} else {
			res.json(results)
		}
	})


});

module.exports = router;