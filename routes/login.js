const express = require("express");
const loginController = require("../controllers/login");

var router = express.Router();

router.get("/", async function (req, res) {

});

router.post("/", async function (req, res) {
    await loginController.login(req.body, function (result) {
        res.send(result);
    });
});

router.put("/", function (req, res) {

});

router.delete("/", function (req, res) {

});

module.exports = router;