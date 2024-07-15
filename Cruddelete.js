const connectdb=require('./connection');
const deleteData=async()=>{
    let db=await connectdb();
    let result=await db.deleteMany({name:'Chaithanya'});
    console.log(result);
}
deleteData();