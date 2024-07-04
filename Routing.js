var express=require('express');
var app=express();
app.post('/chayy',function(req,res){
    res.send('hello I am Chaithanya');
});
app.get('/',function(req,res){
    res.send('hello world this is the landing page');
});
app.listen(3000);