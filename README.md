# ex-mysql -- Simple mysql reconnecting

# Install

	$ npm install mysql ex-mysql

# Simple Example

	var mysql = require('ex-mysql');

	var config = {host:'', user:'', password:'', database:''};

	var con = ex_mysql(config);

	con.connection.query('select sum(1+1)', function(err, rows, field){
		
		if (err){
			console.log(err);
		}else{
			console.log(rows);
		}

	});