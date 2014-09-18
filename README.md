# ex-mysql -- Simple mysql reconnecting

# Install

	$ npm install mysql ex-mysql

# Simple Example

	var mysql = require('ex-mysql');

	var config = {host:'', user:'', password:'', database:''};

	var connection = mysql(config);