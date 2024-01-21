import mongoose from "mongoose";

export const connectdb = ()=>{
    mongoose.connect(process.env.mongo_uri,{
        dbName:"TODOapp"
    }).then(console.log("database connected")).catch((err)=>{
        console.log(err)
    })
}