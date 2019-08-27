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
