import { json } from "express"
import { taskmodel } from "../models/task.js"
import errorhandler from "../middlewares/error.js"

export const newtask = async(req,res,next)=>{
    try {
        const {title,description} = req.body
   await taskmodel.create({title,description,user:req.user._id})

   res.status(201).json({
    success:true,
    message:"task added successfully"
   })
    } catch (error) {
       next(error) 
    }
}

export const getalltask = async(req,res,next)=>{
    try {
        const userid = req.user._id;
    const tasks = await taskmodel.find({user:userid})
    res.status(200).json({
        success:true,
        tasks
    })
    } catch (error) {
        next(error)
        
    }
}


export const updatetask=async(req,res,next)=>{
    try {
        const {id}=req.params;
const task = await taskmodel.findById(id);
task.iscompleted=!task.iscompleted;
await task.save()

res.status(200).json({
success:true,
message:"task updated successfully"
})
    } catch (error) {
        next(error)
    }

}
export const deletetask=async (req,res,next)=>{
    try {
        const {id}=req.params;
    const task = await taskmodel.findById(id);
if(!task) return next(new errorhandler("Task not found",404))

    await task.deleteOne();
res.status(200).json({
    success:true,
    message:"Task deleted successfully"
})
    } catch (error) {
        next(error)
    }

}