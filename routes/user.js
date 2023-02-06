const express = require("express");

var router = express.Router();

router.get("/", function(req, res){
    res.send("users page");
});

router.post("/", function(req, res){

});

router.put("/", function(req, res){

});

router.delete("/", function(req, res){

});

router.get("/:id", function(req, res){
    res.send("User id: " + req.params.id);
});

module.exports = router;