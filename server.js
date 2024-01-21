import { app } from "./app.js";
import { connectdb } from "./data/database.js";

connectdb()
app.listen(process.env.port,(req,res)=>{
    console.log(`server started on port ${process.env.port} in ${process.env.NODE_ENV} mode`)
    })