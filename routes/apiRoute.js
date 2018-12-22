var db = require("../models");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
 db.burgers.findAll({}).then(function(data){
     res.render("index", {results:data})
 })


});

router.post("/eatburger" , function(req,res){
db.burgers.update(
    {devoured: true},
    {where:
        {
            id: req.body.id
        }
    
    }).then(function(results){
    db.burgers.findAll({}).then(function(data){
        res.render("index", {results:data})
    })
    
})

})
router.post("/resetburger" , function(req,res){
    db.burgers.update(
        {devoured: false},
        {where:
            {
                devoured: true
            }
        
        }
        
        ).then(function(results){
        db.burgers.findAll({}).then(function(data){
            res.render("index", {results:data})
        })
        
    })
    
    })


    router.post("/deleteburger ", function(req,res){
        db.burgers.destroy(
            {where:
                {
                    id: req.body.id
                }
            
            }).then(function(results){
            db.burgers.findAll({}).then(function(data){
                res.render("index", {results:data})
            })
            
        })
        
        })
       

router.post("/addburger" , function(req,res){
    console.log(req);
    db.burgers.create({
        burger_name: req.body.burger,
        devoured: 0,

    }).then(function(data)
    {
        db.burgers.findAll({}).then(function(data){
            res.render("index", {results:data})
        })
    })

})



module.exports = router;