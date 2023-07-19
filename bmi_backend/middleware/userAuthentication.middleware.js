const jwt=require("jsonwebtoken")

const authentication=(req,res,next)=>{
    const token=req.headers.authorization
    try{
        const deoode=jwt.verify(token,"BabyCoder")
        if(deoode){
           req.body.userID=deoode.userID
           next()
        }else{
            res.send("please login")
        }
    }catch(err){
        res.send("You are not authorize")
    }
}

module.exports={authentication}