class errorhandler extends Error{
    constructor(message,status){
        super(message)
        this.status=status
    }
}


export const errormiddleware=(err,req,res,next)=>{
    err.status=err.status || 500
    return res.status(err.status).json({
        success:false,
        message:err.message || "Internal server error"
    });
}

export default errorhandler