import mongoose  from "mongoose";


const connectDb=async(DATABASE_URL)=>{

try{
const DB_OPTIONS={
    dbName:"Thakur",
};
await mongoose.connect(DATABASE_URL,DB_OPTIONS);
console.log("Connect successfully");
}catch(error){
    console.log(error)

}

}

export {connectDb}