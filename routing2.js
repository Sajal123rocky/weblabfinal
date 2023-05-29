const express=require('express');
const app=express();

app.get('/',function(req,res){
    res.sendFile(__dirname+'/routing2.html');
});
app.get('/reg',function(req,res){
    var text="<h1>Registration</h1><a href='/'>Home</a><br><a href='/contact'>Contact</a><br>"
    res.send(text);
})
app.get('/contact',function(req,res){
    var text="<h1>Contact</h1><a href='/'>Home</a><br><a href='/reg'>Registration</a><br>"
    res.send(text);
})
app.listen(3000);