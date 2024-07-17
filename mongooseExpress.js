const mongoose=require('mongoose');
const insert=async()=>{
    await mongoose.connect("mongodb://localhost:27017/SureTrust");
    const user=new mongoose.Schema({
        Name:String,
        Age:Number
    });
    const Entry=mongoose.model('Entry',user);
    const entry=new Entry({Name:"Chaithanya",Age:20});
    var a=await entry.save();
    console.warn(a);
}
insert();