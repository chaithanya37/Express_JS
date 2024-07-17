const mongoose=require('mongoose');
const express=require('express');
const app=express();
app.use(express.json());

    const url='mongodb://localhost:27017/SureTrust';
    mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.warn("MongoDB server connected")).catch(e=>console.warn("e"));
    const Schema=mongoose.Schema;
    const user=new Schema({
        Name:String,
        Age:Number
        });
        const Entry=mongoose.model('Entry',user);
        app.post('/insert',async(req,res)=>{
            const {Name,Age}=req.body;
            try{
                const newdata=new Entry({Name,Age});
                await newdata.save();
                res.status(201).send('Data Inserted');
            }
            catch(err){
                res.status(500).send(err);
                }
        });
        
const port=process.env.PORT||3000;
app.listen(port,()=>console.log(`Server is running on port ${port}`));