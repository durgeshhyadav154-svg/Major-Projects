const express=require('express');
const rootDir=require('../util/pathUtil');
const path=require('path');
const { registerHouse } = require('./hostRouter');
const userRouter=express.Router();
const homeController=require('../controllers/homes');


userRouter.get('/',homeController.getHome);

module.exports=userRouter;