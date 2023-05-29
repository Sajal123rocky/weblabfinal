const express=require('express');
const app=express();

app.get('/',function(req,res){
    res.sendFile(__dirname+"/p8a.html");
})

app.listen(3000,function(err){
    console.log("listening")
});