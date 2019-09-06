const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const chatUserData = new Schema({
    sender: {
        type: String,
        require: true
    },
    receiver: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    }
})
var chatRegister = mongoose.model('chats', chatUserData);
exports.addMsg = (req, callback) => {
    console.log('model yes');
    var msg = new chatRegister({
        "sender": req.sender,
        "receiver": req.receiver,
        "message": req.message
    })
    msg.save((err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(null, result);
        }
    })
}
exports.getUserMsg = (req, callback) => {
    //console.log('hello', req);
    
    chatRegister.find({},(err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(null, result);
        }
    })
}