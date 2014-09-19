
function ex_mysql(config){

	var con = {};

	try {
		var mysql = require('mysql');
		set_connection(mysql, con, config);
		return con;
	}
	catch (e) {
		console.log("Notice: 'mysql' module is not available. This should be installed with `npm install mysql`", e);
		return false;
	}

}

function set_connection(mysql, con, config){

	con.connection = mysql.createConnection(config);

	con.connection.connect(function(err) {
		if (err) {
			console.error('error connecting: ' + err.stack);
			console.log('reconnecting..');
			setTimeout(function(){
				set_connection(mysql, con, config);
			}, 1000);
			return;
		}
		console.log('connected as id ' + con.connection.threadId);

		con.connection.on('error', function(err) {
			console.log('connection error ' + new Date());
			console.log(err);
			console.log('reconnecting..');
			setTimeout(function(){
				set_connection(mysql, con, config);
			}, 1000);
		});
	});

}

module.exports = ex_mysql;