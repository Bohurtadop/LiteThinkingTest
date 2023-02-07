const database = require("./database");

async function getCompany(nit, callback) {
    const sql = "select * from companies where nit = :nit";
    database.query(sql, { nit: nit }, function (error, results) {
        if (error) throw error;
        return callback(results);
    });
}

async function createCompany(companyData, callback) {
    const sql = "insert into companies (name, address, nit, phone) values (:name, :address, :nit, :phone)";
    database.query(sql, companyData, function (error, results) {
        if (error) throw error;
        return callback(results);
    });
}

async function getCompanies(callback) {
    const sql = "select * from companies";
    database.query(sql, function (error, results) {
        if (error) throw error;
        return callback(results);
    });
}

module.exports = {
    getCompany,
    createCompany,
    getCompanies
}