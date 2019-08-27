const express=require('express');
const routes=express.Router();
const controller=require('../Controler/controller')
routes.route('/login').post(controller.login);
routes.route('/register').post(controller.register);



module.exports=routes;