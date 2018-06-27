var mysql = require('mysql')

var co = mysql.createConnection({
	host: 'mysql-betourne.alwaysdata.net',
	user: 'betourne',
	password: 'moregame',
	database: 'betourne_los_gustos'
});

co.connect(function(err) {
	if (err) throw err;
	console.log('You are now connected at database')
});

function sendQuery(query, callback) {
	co.query(query, function(error, results, fields) {
		if (error) {
			callback(error)
		} else {
			callback(null, results)
		}
	})
}

module.exports = {
	sendQuery: sendQuery
};