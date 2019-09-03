const express=require('express');
const routes=express.Router();
const controller=require('../Controller/controller.js')
const midware=require('../Middleware/midware')
routes.route('/login').post(controller.login);
routes.route('/register').post(controller.register);
routes.post('/forgot',controller.forgot);
routes.post('/forgot/:token',midware.varify,controller.reset);
routes.get('/getAllUseres',controller.getAllUseres);



module.exports=routes;