const chatModel=require('../Application/models/chatModels');
exports.getUserMsg=(req,callback)=>{
    chatModel.getUserMsg(req,(err,data)=>{
        console.log('services yes');
        if(err){
            console.log("chatservice is not working");
            callback(err);
        }
        else{
            console.log("chatservice is fine");
            callback(null,data);
        }
    })
}
exports.addMsg=(req,callback)=>{
    chatModel.addMsg(req,(err,data)=>{
    if(err){
        callback(err);
    }
    else{
        callback(null,data);
    }

})
}