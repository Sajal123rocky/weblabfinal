const express=require('express');
const app=express();
const MongoClient=require('mongodb').MongoClient;
url='mongodb://127.0.0.1/db4';
MongoClient.connect(url,function(err,db){
    if(!err){
        app.get('/',function(req,res){
            res.sendFile(__dirname+'/index.html');
        })
        app.get('/insert.html',function(req,res){
            res.sendFile(__dirname+'/insert.html');
        })
        app.get('/update.html',function(req,res){
            res.sendFile(__dirname+'/update.html');
        })
        app.get('/insert',function(req,res){
            var ins=req.query;
            req.query.marks=parseInt(req.query.marks);
            db.collection('stud').insert(ins,function(err,doc){
                if(err)
                console.log(err);
                else
                res.send("successfully addedd <br><a href='/'>Home</a>");
            })
        })
        app.get('/update',function(req,res){
            var name=req.query.name;
            var grade=req.query.grade;
            db.collection('stud').updateOne({name:name},{$set:{grade:grade}},function(err,doc){
                if(err)
                console.log(err);
                else
                {
                    if(doc.modifiedCount!=0)
                    db.collection('stud').find().toArray(function(err,doc){
                        res.json(doc);
                    })
                    //res.send("update success")
                    else
                    res.send("update not success");
                }
            })
        })
        app.get('/delete',function(req,res){
            db.collection('stud').deleteMany({examfees:"no"},function(err,doc){
                if(err)
                console.log(err);
                else
                res.send("deleted");
            })
        })
        app.get('/display',function(req,res){
            db.collection('stud').find().toArray(function(err,doc){
                if(err)
                console.log(err);
                else
                {
                   
                    res.render('disp.ejs',{stud:doc})
                }
            })
        })
        app.get('/display20',function(req,res){
            db.collection('stud').find({marks:{$lt:20}}).toArray(function(err,doc){
                if(err)
                console.log(err);
                else
                res.json(doc);
            })
        })
        app.get('/displayS',function(req,res){
            db.collection('stud').find({},{grade:1}).toArray(function(err,doc){
                if(err)
                console.log(err);
                else
                res.json(doc);
            })
        })
    }
})
app.listen(3000,function(err){
    if(err)
    console.log(err);
    else
    console.log('listening at port 3000');
})