const bcrypt=require('bcryptjs');
const mongoose=require('mongoose');
var Schema=mongoose.Schema;
const userData= new Schema({
    firstName:
    {
        type:String,
        required:true
    },
    lastName:
    {
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true,
        unique:true
    },
    password:
    {
        type:String,
        required:true,
        unique:true
    },
    
})

var register=mongoose.model('users',userData);
// console.log("hjvcgfha",register);
// function uModel(){}
// module.exports=uModel;
/**
 * @desc user login 
 * @param  -req,call - it contains the req and respond json file
 * @return json respond messege- data or error
 */

exports.login=(req,callback)=>{
    //console.log("data is"+req.body)
    register.findOne({
        "email":req.body.email
    },(err,data)=>{
        if(data){
        bcrypt.compare(req.body.password, data.password, (err, sucess) => {
            if (sucess) callback(null,sucess);
            else callback(err);
        })
    } else callback("email doesn't exists");
})
}
/**
 * @desc  checking user alreaready exist or not if not exist registering user detailes
 * @param  -req,call - it contains the req and callback json file
 * @return json respond messege- data or error
 */

    exports.register = (req, callback) => {
          console.log("data is",req.body)
        register.findOne({
            "email": req.body.email
        }, (err, data) => {
            if (data) callback("user exists");
            else {
                        bcrypt.hash(req.body.password, 10, (err, encrypted) => {
                            var userDetailes = new register({
                                "firstName": req.body.firstName,
                                "lastName": req.body.lastName,
                                "email": req.body.email,
                                "password": encrypted
                            })
                            userDetailes.save((err, data) => {
                                if (err) callback(err);
                                 else {
                                
                                            callback(null, data);
                                        }
                            
                            
                            })
                        })
               
            }
        })
    }
    



    
