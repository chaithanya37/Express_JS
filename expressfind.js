const connectdb=require('./connection');
const find=async()=>{
    const data=await connectdb();
    let r=await data.find().toArray();
    console.log(r);
}
find();