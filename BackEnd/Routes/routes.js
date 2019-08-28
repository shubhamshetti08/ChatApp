const express=require('express');
const routes=express.Router();
const controller=require('../Controler/controller')
const midware=require('../Middleware/midware')
routes.route('/login').post(controller.login);
routes.route('/register').post(controller.register);
routes.post('/forgot',controller.forgot);
routes.post('/forgot/:token',midware.varify,controller.reset);



module.exports=routes;