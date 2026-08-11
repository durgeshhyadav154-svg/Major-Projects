const express=require('express');
const rootDir=require('../util/pathUtil')
const hostRouter=express.Router();
const path=require('path');


hostRouter.get('/add-home',(req,res,next)=>{
  res.sendFile(path.join(rootDir,'../','Airbnb','views','addHome.html'));
});

hostRouter.post('/add-home',(req,res,next)=>{
    console.log(req.body);
  res.sendFile(path.join(rootDir,'../','Airbnb','views','homeAdd.html'));
});

module.exports=hostRouter;