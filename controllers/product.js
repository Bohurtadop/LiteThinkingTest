const database = require("./database");

async function getProduct(id, callback) {
    const sql = "select * from products where id = :id";
    database.query(sql, { id: id }, function (error, results) {
        if (error) throw error;
        return callback(results);
    });
}

async function createProduct(productData, callback) {
    const sql = "insert into products (id, name, cost, category) values (:id, :name, :cost, :category)";
    database.query(sql, productData, function (error, results) {
        if (error) throw error;
        return callback(results);
    });
}

async function getCompanies(callback) {
    const sql = "select * from products";
    database.query(sql, function (error, results) {
        if (error) throw error;
        return callback(results);
    });
}

module.exports = {
    getProduct,
    createProduct,
    getCompanies
}