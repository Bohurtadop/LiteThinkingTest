const database = require("./database");

async function getInventory(id, callback) {
    const sql = "select * from inventory where id = :id";
    database.query(sql, { id: id }, function (error, results) {
        if (error) throw error;
        return callback(results);
    });
}

async function createInventory(inventoryData, callback) {
    const sql = "insert into inventory (product_id, company_id, quantity) values (:product_id, :company_id, :quantity)";
    database.query(sql, inventoryData, function (error, results) {
        if (error) throw error;
        return callback(results);
    });
}

async function getInventories(callback) {
    const sql = "select * from inventory";
    database.query(sql, function (error, results) {
        if (error) throw error;
        return callback(results);
    });
}

module.exports = {
    getInventory,
    createInventory,
    getInventories
}