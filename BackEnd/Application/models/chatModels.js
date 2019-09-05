const mongoose=require('mongoose');
var Schema=mongoose.Schema;
const chatUserData= new Schema({
    sender:
    {
        type:String,
        require:true
    },
    receiver:
    {
        type:String,
        require:true
    },
    message:
    {
        type:String,
        require:true
    }
})
var chatRegister=mongoose.model('chats',chatUserData);
exports.getUserMsg=(req,callback)=>{
    console.log('model yes');
    var msg= new chatRegister({
        "sender":req.body.sender,
        "receiver":req.body.receiver,
        "message":req.body.message
    })
    msg.save((err,result)=>{
        if(err){
            callback(err);
        }
        else{
            callback(null,result);
        }
    })
}
exports.addMsg=(chatData,callback)=>{
    console.log('hello',chatData);
    const newMsg=new chatRegister({
        sender:chatData.sender,
        receiver:chatData.receiver,
        message:chatData.message
    });
    newMsg.save((err,result)=>{
        if(err){
            return callback(err);
        }
        else{
            return callback(null,result);
        }
    })
}