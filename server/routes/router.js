const express=require('express');
const route=express.Router();
const services=require('../services/render')
const controller=require('../controller/controller');
route.get('/',services.hoomeRoutes);

route.get('/list',services.userList)
route.get('/update',services.userUpdate)

module.exports=route;

//api
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id',controller.delete);
