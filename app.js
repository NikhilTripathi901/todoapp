import  express  from "express";
import userroutes from "./routes/user.js"
import taskroutes from "./routes/task.js"
import {config} from "dotenv"
import CookieParser from "cookie-parser";
import { errormiddleware } from "./middlewares/error.js";
import cors from "cors"
export const app = express()

config({
    path:"./data/config.env"
})

app.use(express.json())
app.use(CookieParser())
app.use("/api/v1/users",userroutes)
app.use("/api/v1/task",taskroutes)
app.use(cors({
    origin:[process.env.Frontend_url],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))

app.get("/",(req,res)=>{
    res.send("working")
})

app.use(errormiddleware)