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
const app = express();



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

// app.get('/', (req, res)=> {
//     res.send('Hello World')
// })

app.listen(4000,()=>{
    console.log('port 4000');
})
module.exports=app;