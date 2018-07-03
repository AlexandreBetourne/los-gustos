var mysql = require('mysql')

var co = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME
});

co.connect(function(err) {
	if (err) throw err;
	console.log("\x1b[35m", 'You are now connected at database with Alwaysdata')
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