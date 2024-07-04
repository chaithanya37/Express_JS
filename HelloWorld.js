var express=require('express');
var app=express();
app.get('/ch',function(req,res){
    res.send("Hello Guys This is chaithanya");
});
app.listen(2020);