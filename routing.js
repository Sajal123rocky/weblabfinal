const express=require('express');
const app=express();

app.get('/',function(req,res){
    res.sendFile(__dirname+'/routing.html');
})
app.get('/cse',function(req,res){
    res.sendFile(__dirname+'/cse.html')
})
app.get('/ise',function(req,res){
    res.sendFile(__dirname+'/ise.html')
})
app.get('/ece',function(req,res){
    res.sendFile(__dirname+'/ece.html')
})
app.listen(3000,function(err){
    if(err)
    console.log(err);
    else
    console.log('listenng at port 3000');
})
