var express = require('express');
var router = express.Router();
var UserController = require('../app/controllers/UserController');

/* GET users listing. */
router.get('/loginx', function(req, res, next) {
    res.json({status:200,message:"ok",data:[]});
    //UserController.add(req,res);
});

router.post('/login',function (req,res) {
    var type = req.body.params.type;
    if(type == "login"){
        UserController.Login(req,res);
    }else {
        res.json({status: 200, message: "login type err", error:"login type err"});
    }
});

router.post('/register',function (req,res) {
    var type = req.body.params.type;

    if(type == "check_username"||type == "check_email"){
        UserController.FindByName(req,res);
    }else  if(type == "register"){
        UserController.addUser(req,res);
    }else{
        res.json({status:500,message:"post type err",data:[]});
    }

    //UserController.addUser(req,res);
   // res.json({status:200,message:"ok",data:[]});
});

module.exports = router;
