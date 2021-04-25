const User=require("../models/User");
// const mongoose=require("mongoose");
const express=require("express");
const jwt=require("jsonwebtoken");
const app=express();
// app.use(express.urlencoded({extended:true}))
const bodyParser=require("body-parser");
//const { JsonWebTokenError } = require("jsonwebtoken");
app.use(bodyParser.urlencoded({extended:false}));

const maxAge=60*60*24;
const createToken=(id)=>{
   return jwt.sign({id},"gizlikelime",{expiresIn:maxAge})
}



const login_get=(req,res)=>{
    res.render("oturumAc");
}


const login_post=async (req,res)=>{
    
    const {email,password}=req.body;
    const userm="mehmet";

    let errors=[];
    if(!email || !password )
    {
        errors.push({msg:"Lütfen ilgili yerleri doldurunuz..."})
    }

    if(errors.length>0){
        res.render("oturumAc",{
            errors,         
            email,
            password,
            userm
        })
    }
    else{     
        let errors=[];
        try{
            const user=await User.login(email,password)
            const token=createToken(user._id)
            res.cookie("jwt",token,{maxAge:maxAge*1000});
            res.redirect("yonetici");
        }
        catch(e){
            console.log(e);
            errors.push({msg:e});
            res.render("oturumAc",{

                errors,
                userm,
                
                email,
                password,
                
    
            })
            
            
        
        }
    }

  // console.log(name+" "+password);
   



}
const signup_get=(req,res)=>{
    res.render("kayit");
}

const signup_post=(req,res)=>{
    const userm="mehmet";
    



    const {name,email,password,password2}=req.body
    let errors=[];

    if(!name || !email || !password || !password2)
    {
        errors.push({msg:"Lütfen ilgili yerleri doldurunuz..."})
    }
    if(password!==password2){
        errors.push({msg:"Şifreler eşleşmiyor..."})
    }
    if(password.length<6){
        errors.push({msg:"Şifreniz 6 karakreden küçük olamaz..."})
    }
    if(errors.length>0){
        res.render("kayit",{

            errors,
            name,
            email,
            password,
            password2,
            userm

        })
    }else{
        
        User.findOne({email,email})
        .then(user=>{
            if(user){
                errors.push({msg:"Email zaten kayıtlı..."});
                res.render("kayit",{
                    errors,
                    name,
                    email,
                    password,
                    password2
                })
            }
            else{
                const user=new User(req.body)
                user.save()
                .then((result)=>{
                    res.redirect("oturumAc");
                })
                .catch((err)=>{
                    console.log(err);
                })
            }
        })
        
     
    }






    

    


}

const logout_get=(req,res)=>{
    const email=req.headers.cookie;
    res.cookie("jwt","",{maxAge:1})
   
    res.cookie("jwtk","",{maxAge:1})
    res.redirect("/giris");
    
}


module.exports={
    login_get,
    login_post,
    signup_get,
    signup_post,
    logout_get
}