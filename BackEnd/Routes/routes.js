const express=require('express');
const routes=express.Router();
const controller=require('../Controller/controller.js');
var chatControllers=require('../Controller/chatController')
const midware=require('../Middleware/midware')
routes.route('/login').post(controller.login);
routes.route('/register').post(controller.register);
routes.post('/forgot',controller.forgot);
routes.post('/forgot/:token',midware.varify,controller.reset);
routes.get('/getAllUseres',controller.getAllUseres);
routes.get('/getUserMsg',chatControllers.getUserMsg);
routes.post('/addMsg',chatControllers.addMsg);


module.exports=routes;