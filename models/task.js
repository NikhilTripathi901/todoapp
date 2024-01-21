import mongoose from "mongoose";

const taskschema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },

    description:{
        type:String,
        required:true,
    },

    iscompleted:{
        type:Boolean,
        default:false
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    createdat:{
type:Date,
default:Date.now
    }
})

export const taskmodel = mongoose.model("Task",taskschema)