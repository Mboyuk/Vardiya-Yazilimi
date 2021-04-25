const jwt=require("jsonwebtoken");

const User=require("../models/User");






const requireAuth=(req,res,next)=>{
  

    const token=req.cookies.jwt //varsayılan
  
    console.log("tokeniöizz :"+token)
    

    if(token){
        jwt.verify(token,"gizlikelime",(err,decodedToken)=>{
            if(err){
                console.log(err)
                res.redirect("/giris");
            }
            else{
                console.log(decodedToken)
                next();
            }
        })
    }
    else{
        res.redirect("/giris");
    }
}

const checkUser=(req,res,next)=>{

   

    const token=req.cookies.jwt
    console.log("check user cokie token : "+token)
    if(token){
        jwt.verify(token,"gizlikelime",async (err,decodedToken)=>{
            if(err){
                console.log(err)
               res.locals.userm=null
            }
            else{
                console.log(decodedToken)
                let user=await User.findById(decodedToken.id)
                res.locals.userm=user
                next();
            }
        })
    }
    else{
        res.locals.userm=null;
        next();
    }
}

module.exports={
    requireAuth,
    checkUser
}