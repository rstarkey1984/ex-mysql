var mysql = require('mysql');
var ex_mysql = require('./index.js');

var config = {host:'', user:'', password:'', database:''}; // db setting

var con = ex_mysql(config);

work_process = function(){
	
	con.connection.query('select sum(1+1)', function(err, rows, field){

		if (err){
			console.log(err);
		}else{
			console.log(rows);
		}

	});

	setTimeout(function(){

		work_process();

	}, 1000);

};

work_process();