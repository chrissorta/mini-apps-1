var mysql = require('mysql');


var db = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'checkout'
});

db.connect();

module.exports = db;