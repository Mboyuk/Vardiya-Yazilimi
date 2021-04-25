const User=require("../models/User");
const Calisanlar=require("../models/Calisanlar");
const jwtk=require("jsonwebtoken");

const maxAge=60*60*24;
const createToken=(id)=>{
   return jwtk.sign({id},"gizlikelime",{expiresIn:maxAge})
}

const kullaniciSayfası=(req,res)=>{
    const date=new Date();
    const gun=date.getDate();
    const ay=date.getMonth()+1;
    const str=gun+"/0"+ay;
    console.log("safdasdfasdfasdf"+str)

    const token=req.cookies.jwtk
     console.log("check user cokie token : "+token)
     if(token){
         jwtk.verify(token,"gizlikelime",async (err,decodedToken)=>{
             if(err){
                 console.log(err)
                // res.locals.userm=null
             }
             else{
                 console.log(decodedToken)
                 let user=await Calisanlar.findById(decodedToken.id)
                    console.log(user);
                    res.render("kullanici",{
                        user
                    })

                //  console.log("Userimmm :"+user.email)
                //   const  calisanKodu=user.email;

                //   Calisanlar.find({calisanKodu,calisanKodu})
                
                //    .then(calisanKodu=>{
                    
                //         if(calisanKodu){
                //             res.send(calisanKodu)

                //         }

                    
            
     
                //          else{
                //           //  res.locals.userm=null;
                //            //  next();
                //            res.send(calisanKodu)
                //               }
                //      })
                 }
            })
        }
        else{
            res.redirect("giris");
        }
}



const kullaniciOturumAcGet=(req,res)=>{

    res.render("kullaniciOturum");
}

const kullaniciOturumAcPost=async (req,res)=>{

    const {email,pass}=req.body;
    console.log(email+" "+pass);
    const userm="mehmet";

    let errors=[];
    if(!email || !pass )
    {
        errors.push({msg:"Lütfen ilgili yerleri doldurunuz..."})
    }

    if(errors.length>0){
        res.render("kullaniciOturum",{
            errors,         
            email,
            pass,
            userm
        })
    }
    else{     
        let errors=[];
        try{
            const user=await Calisanlar.login(email,pass)
            const token=createToken(user._id)
            res.cookie("jwtk",token,{maxAge:maxAge*1000});
             res.redirect("kullanici")
        }
        catch(e){
            console.log(e);
            errors.push({msg:e});
            res.render("kullaniciOturum",{

                errors,
                userm,
                
                email,
                pass,
                
    
            })
            
            
        
        }
    }

  // conso

   // res.render("kullaniciOturum");
}

module.exports={
    kullaniciSayfası,
    kullaniciOturumAcGet,
    kullaniciOturumAcPost
}