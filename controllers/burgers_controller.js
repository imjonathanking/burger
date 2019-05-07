var burger = require("../models/burger");
var express = require("express");

var router = express.Router();

router.get("/", function(req, res){

    burger.selectAll(function(data){
        var burgersObject = {
            burgers: data
        }
        console.log(burgersObject);
        res.render("index", burgersObject);

    })
})

module.exports = router;