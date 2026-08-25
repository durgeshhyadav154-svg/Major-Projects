const registerHouse=[];

exports.getAddHome=(req,res,next)=>{
  res.render('addHome',{pageTitle:'add home to airbnb',currentPage:'addHome'});
};


exports.postAddHome=(req,res,next)=>{
  console.log("Home registration successfully :", req.body.houseName);
    registerHouse.push({houseName:req.body.houseName,housePrice:req.body.housePrice,houseLocation:req.body.houseLocation,houseRating:req.body.houseRating,housePhotoURL:req.body.housePhotoURL});
  res.render('homeAdd',{pageTitle:'home added'});
};

exports.getHome=(req,res,next)=>{
  console.log(registerHouse);
  res.render('home',{registerHouse:registerHouse,pageTitle:'airbnb home'});
}

exports.registerHouse =registerHouse;