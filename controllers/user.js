const database = require("./database");

async function getUser(id, callback) {
    const sql = "select * from users where username = :id";
    database.query(sql, { id: id }, function (error, results) {
        if (error) throw error;
        return callback(results);
    });
}

async function createUser(userData, callback) {
    const sql = "insert into users (username, email, password, admin) values (:username, :email, :password, :admin)";
    database.query(sql, userData, function (error, results) {
        if (error) throw error;
        return callback(results);
    });
}

async function getUsers(callback) {
    const sql = "select * from users";
    database.query(sql, function (error, results) {
        if (error) throw error;
        return callback(results);
    });
}

module.exports = {
    getUser,
    createUser,
    getUsers
}