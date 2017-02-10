/**
 * Created by Livia on 2015/12/10.
 */
module.exports = {
    Helloworld: function(req, res){
        return res.json({Hello: 'Hello World!'});

    },
    addUser:function(req,res){
        var  User = {
            Name:req.body.params.param.username,
            Email:req.body.params.param.mail,
            Password:req.body.params.param.password1,
        };

        req.models.user.findOne({Name:User.Name}).exec(function (err, result){
            if(result != null){
                res.json({error:"账号以存在"});
            }else{
                req.models.user.findOne({Email:User.Email}).exec(function (err, result){
                    if(result != null){
                        res.json({error:"邮箱以存在"});
                    }else{
                        req.models.user.create(User).exec(function(err,result) {
                            res.json({Result: result, error: err});
                        });
                    }
                });
            }
        });

    },
    viewUser: function(req, res){
        var page = parseInt(req.query.page, 10) ? parseInt(req.query.page, 10) : 1;
        var limit = parseInt(req.query.limit, 10) ? parseInt(req.query.limit, 10) : 1;
        req.model.user.find().paginate({page:page,limit:limit}).exec(function (err, result){
            res.json({Result: result});
        });
    },
    FindByName: function (req,res) {
        console.log(req.body.params.username);
        var type = req.body.params.type;
        var param = req.body.params.param;
        if(type == "check_username"){
            req.models.user.findOne({Name:param}).exec(function (err, result){
                res.json({Result: result});
            });
        }else if(type == "check_email"){
            req.models.user.findOne({Email:param}).exec(function (err, result){
                res.json({Result: result});
            });
        }else {
            res.json({status: 500, message: "type err!", data: []});
        }
    },
    
    Login: function (req,res) {
        var data =  req.body.params.param;
        if(isEmail(data.username)){
            req.models.user.findOne({Email:data.username}).exec(function (err,result) {
               if(result.Password == data.password){
                   res.json({Result:1});
               }else{
                   res.json({Result:0});
               }
            });
        }else{
            req.models.user.findOne({Name:data.username}).exec(function (err,result) {
                if(result.Password == data.password){
                    res.json({Result:1});
                }else{
                    res.json({Result:0});
                }
            });
        }
        
    }
}

//util......................
function isEmail(str){
    var myreg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    console.log('hello');
    return myreg.test(str);
}