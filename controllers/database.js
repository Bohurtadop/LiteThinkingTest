var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'M4r14n4.',
    database: 'lite'
});

module.exports = connection;