const express=require('express');
const app=express();
var count=0;
function logger(req,res,next){
    console.log("logged in");
    count++;
    next();
}
app.use(logger);
var visit=function(req,res,next){
    res.visit=count;
    console.log('visited'+count);
    next();
}
app.use(visit);
app.get('/',function(req,res){
    res.send('visited'+res.visit);
})
app.listen(3000);