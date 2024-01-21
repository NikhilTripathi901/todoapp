import mongoose from "mongoose";

const schema = mongoose.Schema({
    name:{
        type: String,
        required:true,
    },

    email:{
        type: String,
        required:true,
        unique:true
    },

    
    password:{
        type: String,
        required:true,
        select:false
    },

    createdat:{
        type:Date,
        default:Date.now
    }
})

export const usermodel = mongoose.model("User",schema)