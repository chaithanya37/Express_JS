const connectdb=require('./connection');
const insert =async()=>{
    const db=await connectdb1();
    const result=await db.insertMany([{name:'Chaithanya',age:21,Qualification:'B tech'},
        {name:'Avinash',age:21,Hobbies:['reading','Music']},
        {name:'Dhanush',age:21,Qualification:'M tech'}
    ]);
    if(result.acknowledge)
        console.log('Data inserted successfully');
}
insert();