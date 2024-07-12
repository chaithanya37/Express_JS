const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const database="Sure_trust";
const client= new MongoClient(url);
const connectdb=async()=>{
    var a=await client.connect();
    db=a.db(database);
    console.log("connected to database");
    return db.collection("Student");
    }
    module.exports=connectdb;