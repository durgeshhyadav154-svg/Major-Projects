const express=require('express');
const rootDir=require('../util/pathUtil')
const path=require('path');
const userRouter=express.Router();

userRouter.get('/',(req,res,next)=>{
  res.sendFile(path.join(rootDir,'../','Airbnb','views','home.html'))
});

module.exports=userRouter;