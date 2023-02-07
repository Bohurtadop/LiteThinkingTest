const express = require("express");
const inventoryController = require("../controllers/inventory");

var router = express.Router();

// Basic CRUD
router.get("/", async function (req, res) {
    await inventoryController.getInventories(function (result) {
        res.send(result);
    });
});

router.post("/", async function (req, res) {
    await inventoryController.createInventory(req.body, function (result) {
        res.send(result);
    });
});

router.put("/", function (req, res) {

});

router.delete("/", function (req, res) {

});

// Additional routes
router.get("/:companyId", async function (req, res) {
    const { companyId } = req.params;
    await inventoryController.getInventory(companyId, function (result) {
        res.send(result);
    });
});

module.exports = router;