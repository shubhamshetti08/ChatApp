/********************************************************************************************************************
 * @Execution : default node : cmd> npm start
 * @Purpose : chatapp peer-to-peer communication
 * @description: signIn and registration for the chatapp
 * @overview:  backend api's
 * @author : shubham shetti<shubhamshetti08@gmail.com>
 * @version : 1.0
 * @since : 27-08-2019
 *******************************************************************************************************************/
const model=require('../Application/models/models');
/**
  * @desc redirecting data to model
  * @param  -req,call - it contains the req and callback function
  * @return returning back to the model and checking  data or error
*/
exports.login=(req,callback)=>{
    //console.log(" in service",req.body)
    model.login(req,(err,data)=>
    {
        if(err)
        {
            callback(err);
        }
        else{
            callback(null,data);
        }
    })
}
/**
  * @desc redirecting data to model
  * @param  -req,call - it contains the req and callback function
  * @return returning back to the model and checking  data or error
*/
exports.register=(req,callback)=>{
    model.register(req,(err,data)=>{
        if(err){
            callback(err);
        }
        else{
            callback(null,data);
        }
    })
}



exports.forgot=(req,callback)=>{
    model.forgot(req,(err,data)=>{
        if(err){
            callback(err);
        }
        else{
            callback(null,data);
        }
    })
}
exports.reset=(req,callback)=>{
    model.resetPassword(req,(err,data)=>{
        if(err){
            callback(err);
        }
        else{
            callback(null,data);
        }
    })
}

