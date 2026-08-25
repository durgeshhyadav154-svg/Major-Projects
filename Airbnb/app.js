const path=require('path');
const rootDir=require('./util/pathUtil')
const express=require('express');
const { urlencoded } = require('body-parser');
const {registerHouse}=require('./routes/hostRouter')
const userRouter = require('./routes/userRouter');
const {hostRouter} = require('./routes/hostRouter');
const app=express();
const mysql=require ("mysql2");

const connection =mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'college_app',
  password:'Dkshruti@128'
});


app.set('view engine', 'ejs');
app.set('views','views');

app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);

app.use(express.static(path.join(rootDir,'public')));

app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle:'Page not found'});
})

const port=3000;
app.listen(port,()=>{
    console.log(`Server is working on this server http://localhost:/${port}`);
});
