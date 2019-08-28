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
    console.log(req.body.email)
    register.findOne({
        "email":req.body.email,
          },(err,data)=>{
              console.log(data._id) 
         if(data){
             console.log(req.body.password+'hell  '+data.password);
        bcrypt.compare(req.body.password, data.password, (err, sucess) => {
            console.log(sucess)
            if (sucess) 
            { 
                callback(null,data)
             
            }
            else callback("emai and  password misMatch");
        })
    }    else callback("email and password misMatch"+err);
})
}
// exports.login = (req, call) => {
//     register.findOne({
//         "email": req.body.email
//     }, (err, data) => {
//         if (data) {
//             bcrypt.compare(req.body.password, data.password, (err, sucess) => {
//                 if (sucess) call("login success");
//                 else call("password does not match");
//             })
//         } else call("email doesn't exists");
//     })
// }

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
                            console.log("cbbc",encrypted)
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
    


    
    exports.forgot=(req,callback)=>{
        //console.log("data is",req)
        register.findOne({
            "email":req.body.email
        },(err,data)=>{
                if (data) callback(null,data);
                else callback(err);
        })

}
exports.resetPassword = (req, call) => {
    bcrypt.hash(req.body.password, 10, (err, encrypted) => {
        console.log(req.decoded.payload.id)
        register.updateOne({
            "_id": req.decoded.payload.id
        },{
            "password": encrypted}
        , (err, data) => {
            if (err) call("error")
            else call(null,data);
        })
    })
}
