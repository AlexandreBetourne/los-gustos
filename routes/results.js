var express = require('express');
var router = express.Router();
var database = require('../services/database.js');


router.get('/', function(req, res, next) {
	var food = req.param('food');
	var allResults = [];
	database.sendQuery(`SELECT * from ${food}`, function(err, results) {
		if (err) {
			console.log(err)
		} else {
			for (var i = 0; i < results.length; i++) {
				allResults.push({
					name: results[i].name,
					price: results[i].price,
					img: results[i].img,
					ingredient: results[i].ingredient
				})
			}
			if (req.session.user) {
				res.render('results', {
					allResults: allResults,
					food: food,
					url: req.originalUrl,
					user: req.session.user.connected
				});
			} else {
				res.render('results', {
					allResults: allResults,
					food: food,
					url: req.originalUrl
				});
			}
		}
	})
});



module.exports = router;