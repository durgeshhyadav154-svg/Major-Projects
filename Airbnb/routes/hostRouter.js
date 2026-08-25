const express=require('express');
const rootDir=require('../util/pathUtil')
const hostRouter=express.Router();
const path=require('path');

const homeController=require('../controllers/homes');


hostRouter.get('/add-home',homeController.getAddHome);


hostRouter.post('/add-home',homeController.postAddHome);

exports.hostRouter=hostRouter;
