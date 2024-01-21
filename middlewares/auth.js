import jwt from "jsonwebtoken";
import { usermodel } from "../models/user.js";

export const isauthenticated =async (req,res,next)=>{
const {token}=req.cookies;
if(!token){
   return res.json({
        success:false,
        message:"Login first"
    })
}

const decoded = jwt.verify(token,process.env.tokensecret)

const user = await usermodel.findById(decoded._id)
req.user=user
next();
}