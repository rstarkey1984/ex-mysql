

function ex_mysql(config){

	try {
		var mysql = require('mysql');

		var connection = mysql.createConnection(config);

		connection.connect(function(err) {
			if (err) {
				console.error('error connecting: ' + err.stack);
				setTimeout(function(){
					console.log('reconnect..');
					connection = ex_mysql(config);
				}, 1000);
				return;
			}
			console.log('connected as id ' + connection.threadId);

			connection.on('error', function(err) {
				console.log('connection error ' + new Date());
				console.log(err);

				setTimeout(function(){
					console.log('reconnect..');
					connection = ex_mysql(config);
				}, 1000);

			});
		});

		return connection;
	}
	catch (e) {
		console.log("Notice: 'mysql' module is not available. This should be installed with `npm install mysql`", e);
		return false;
	}

}

module.exports = ex_mysql;