var mysql = require('mysql');
var ex_mysql = require('./index.js');

var config = {host:'', user:'', password:'', database:''};


var connection = ex_mysql(config);