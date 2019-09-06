/********************************************************************************************************************
 * @Execution : default node : cmd> chatapp
 * @Purpose : to build the chat app
 * @description :chatapp backend
 * @overview : chatapp backend
 * @author : shubham shetti <shubhamshetti08@gmail.com>
 * @version : 1.0
 * @since : 27-08-2019
 *******************************************************************************************************************/
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const routes = require('../BackEnd/Routes/routes');
const dbCon = require('./Configuration/database.config');
const expressValidator=require('express-validator');
const chatController=require('./Controller/chatController')
const app = express();
require('dotenv').config();


mongoose.Promise = global.Promise;


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(expressValidator());
app.use('/', routes);

mongoose.connect(dbCon.url, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log('success');
}).catch(() => {
    console.log('connection failed');
})

app.get('/', (req, res)=> {
    res.send('Hello World')
})
const server=app.listen(4000,()=>{
    console.log('port 4000');
})
const io=require('socket.io').listen(server);
io.sockets.on('connection',function(socket){
   
         socket.on('NewMessage',function(req){
            chatController.addMsg(req,(err,result)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log(null,result);
                }
                io.emit(req.sender,result);
                io.emit(req.receiver,result)
            })
        })
    })
    io.on('disconnect',function(){
        io.emit(req.receiver,result);
})

module.exports=app;