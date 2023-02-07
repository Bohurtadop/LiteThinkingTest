const express = require("express");
const companyController = require("../controllers/company");

var router = express.Router();

// Basic CRUD
router.get("/", async function (req, res) {
    await companyController.getCompanies(function (result) {
        res.send(result);
    });
});

router.post("/", async function (req, res) {
    await companyController.createCompany(req.body, function (result) {
        res.send(result);
    });
});

router.put("/", function (req, res) {

});

router.delete("/", function (req, res) {

});

// Additional routes
router.get("/:id", async function (req, res) {
    const { id } = req.params;
    await companyController.getCompany(id, function (result) {
        res.send(result);
    });
});

module.exports = router;