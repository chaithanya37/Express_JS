const connectdb=require('./connection');
const update=async()=>{
    const db=await connectdb();
    const result=await db.updateMany({name:'Dhanush'},{$set:{Qualification:'B tech'}});

    console.warn("data is Updated Successfully");
}
update();