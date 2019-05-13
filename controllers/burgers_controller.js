var burger = require("../models/burger");
var express = require("express");

var router = express.Router();

router.get("/", function(req, res){

    burger.selectAll(function(data){
        burgerObject = {};

        devoured = [];
        notDevoured = [];

        data.forEach(function(thisBurger){
            if(thisBurger.devoured === 1){
                devoured.push(thisBurger);
            }
            else{
                notDevoured.push(thisBurger);
            }
        });

        burgerObject.devoured = devoured;
        burgerObject.notDevoured = notDevoured;

        console.log(burgerObject);

        res.render("index", burgerObject);

    })
})

router.get("/api/allBurgers", function(req, res){
    burger.selectAll(function(data){
        res.json(data);
    })
})

router.post("/addBurger", function(req, res){
    newBurger = req.body.name;

    console.log(newBurger);

    burger.insertOne(newBurger, function(response){
        console.log(response);
    })
});

router.post("/eatBurger", function(req, res){
    burgerId = req.body.id;

    console.log(burgerId);

    burger.updateOne(burgerId, function(response){
        console.log(response);
    });
})

module.exports = router;