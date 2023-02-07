const database = require("./database");

async function login(data, callback) {
    const sql = "select * from users where email = :email";
    database.query(sql, data, function (error, results) {
        if (error) throw error;

        // compare passwords
        if (results[0].password == data.password) {
            return callback(true);
        }
        return callback(false);
    });
}

module.exports = {
    login
}