
const User=require("../models/User");
const Calisanlar=require("../models/Calisanlar");
const jwt=require("jsonwebtoken")
const CalisanlarDemo=require("../models/CalisanlarDemo");

const yoneticiSayfası=(req,res)=>{

    // const cookieSyf=req.headers.cookie;
    //  const calisanKodu=cookieSyf.split("=")[0];
     

     const token=req.cookies.jwt
     console.log("check user cokie token : "+token)
     if(token){
         jwt.verify(token,"gizlikelime",async (err,decodedToken)=>{
             if(err){
                 console.log(err)
                // res.locals.userm=null
             }
             else{
                 console.log(decodedToken)
                 let user=await User.findById(decodedToken.id)


                 console.log("Userimmm :"+user.email)
              const  calisanKodu=user.email;
                 const name=[];
                const baslangicTarih=[];
                const bitisTarih=[];
                const tarih=[];
                
                
                
                
                Calisanlar.find({calisanKodu,calisanKodu})
                
                .then(calisanKodu=>{
                    
                        if(calisanKodu){
                            const calisanlar=calisanKodu;
                            console.log("caliasnlarııımmmmm"+calisanlar)
                            
                            for(var a=0;a<calisanlar.length;a++){
                                name.push(calisanlar[a].name);
                                baslangicTarih.push(calisanlar[a].bat);
                                bitisTarih.push(calisanlar[a].bat2);
                                tarih.push(calisanlar[a].tarih);
                            // console.log("tarihhhhh "+calisanlar[a].tarih)
                                
                                
                            }
                            const onaltı=[];
                            
                            const date=new Date();
                            const gun=date.getDate();
                            const ay=date.getMonth()+1;
                            const gunBir=gun.toString();
                            const ayBir=ay.toString();
                            const birlesik=gunBir+"/0"+ayBir;
                            console.log(birlesik);
                            const onaltiisim=[]
                            for(var i=0;i<calisanlar.length;i++){
                                for(var j=0;j<calisanlar[i].tarih.length;j++){
                                    if(calisanlar[i].tarih[j]==="16/02"){
                                        onaltı.push(calisanlar[i].bat[j]+"-"+calisanlar[i].bat2[j])
                                        onaltiisim.push(calisanlar[i].name);
                                    
                                    }
                                    else{
                                        onaltiisim.push(calisanlar[i].name);
                                        onaltı.push("-")
                                    }
                                    
                                }
                            }
                            const onyedilik=[]
                            for(var i=0;i<calisanlar.length;i++){
                                for(var j=0;j<calisanlar[i].tarih.length;j++){
                                    if(calisanlar[i].tarih[j]==="17/02"){
                                        onyedilik.push(calisanlar[i].bat[j]+"-"+calisanlar[i].bat2[j])
                                    
                                    }
                                    else{
                                        onyedilik.push("-")
                                    }
                                    
                                }
                            }
                
                            const onsekiz=[];
                            
                            for(var i=0;i<calisanlar.length;i++){
                                for(var j=0;j<calisanlar[i].tarih.length;j++){
                                    if(calisanlar[i].tarih[j]==="18/02"){
                                        onsekiz.push(calisanlar[i].bat[j]+"-"+calisanlar[i].bat2[j])
                                        
                                    
                                    }
                                    else{
                                        onsekiz.push("-")
                                    }
                                    
                                }
                            }
                            console.log("onaltıisim: "+onaltiisim)
                            console.log("onalılık: "+onaltı)
                            console.log("onyedilik : "+onyedilik)
                            res.render("yonetici",{
                                calisanlar,
                                calisanKodu,
                                name,
                                baslangicTarih,
                                bitisTarih,
                                tarih,
                                onaltı,
                                onyedilik,
                                onsekiz,
                                onaltiisim
                            })
                            console.log("tarihler"+tarih)
                            // console.log("calisanlar "+calisanlar)
                            console.log("isimmlerr  "+name)
                            console.log("baslangic  "+baslangicTarih)
                            console.log("bitis  "+bitisTarih)
                
                        }
                    
                    
                        //res.redirect("yonetici")
                    
                    
                    
                    
                })
                
                            //  res.locals.userm=user
                            //  next();
                        }
                    })
     }
     else{
        //  res.locals.userm=null;
        //  next();
     }
     


     
     

    
    //res.render("yonetici");
}
const calisanlar=(req,res)=>{

    // const cookieSyf=req.headers.cookie;
    //  const calisanKodu=cookieSyf.split("=")[0];


     const token=req.cookies.jwt
     console.log("check user cokie token : "+token)
     if(token){
         jwt.verify(token,"gizlikelime",async (err,decodedToken)=>{
             if(err){
                 console.log(err)
                // res.locals.userm=null
             }
             else{
                 console.log(decodedToken)
                 let user=await User.findById(decodedToken.id)
                const calisanKodu=user.email;
                 const name=[];
                 const bolum=[];
                 const email=[];
                 Calisanlar.find({calisanKodu,calisanKodu})
                 .then(calisanKodu=>{
                     if(calisanKodu){
                        console.log("ad"+calisanKodu);
                        const calisanlar=calisanKodu;
                        for(var a=0;a<calisanlar.length;a++){
                           name.push(calisanlar[a].name);
                           bolum.push(calisanlar[a].bolum);
                           email.push(calisanlar[a].email);
                        }
                       // console.log("calisanlar"+calisanlar[0].name)
                        res.render("calisanlar",{
                            calisanKodu,
                            name,
                            bolum,
                            email
                            
                        })
                     }
                     else{
                         //res.render("calisanlar")
            
                     }
                    
                    //  name.push(calisanlar[0].name);
                    //  name.push(calisanlar[1].name);
                    //  bolum.push(calisanlar[0].bolum);
                    //  bolum.push(calisanlar[1].bolum);
                    //  email.push(calisanlar[0].email);
                    //  email.push(calisanlar[1].email);
            
            
                   
                 })
                //  res.locals.userm=user
                //  next();
             }
         })
     }
     else{
        //  res.locals.userm=null;
        //  next();
     }
     

    // Calisanlar.find({calisanKodu,calisanKodu},function(err,result){
    //     if(err){
    //         console.log(err)
    //     }
    //     else{
    //         console.log(result)


    //         res.render("calisanlar",{
    //             result
    //         })
    //        // res.send(result);
    //     }
    // })



    //res.render("calisanlar");
}


const calisanEkleme=(req,res)=>{


    res.render("calisanEkleme");
}


const calisanEklemePost=(req,res)=>{

    // console.log(req.headers.cookie);
    // const cookieSyf=req.headers.cookie;

    //  const calisanKodu=cookieSyf.split("=")[0];



     const token=req.cookies.jwt
     console.log("check user cokie token : "+token)
     if(token){
         jwt.verify(token,"gizlikelime",async (err,decodedToken)=>{
             if(err){
                 console.log(err)
                // res.locals.userm=null
             }
             else{
              
                 console.log(decodedToken)
                 let user=await User.findById(decodedToken.id)
                const calisanKodu=user.email;
                 console.log("cookieee : "+calisanKodu);

                 const {name,bolum,email,pass}=req.body;
                 const calisan=new Calisanlar(req.body)
                 calisan.calisanKodu=calisanKodu;
                 
                             calisan.save()
                             .then((result)=>{
                                 res.redirect("../calisanlar");
                             })
                             .catch((err)=>{
                               
                                 console.log("bu kullanıcı mevcut"+err);
                                 res.redirect("/add")
                             })
             

                //  res.locals.userm=user
                //  next();
             }
         })
     }
     else{
        //  res.locals.userm=null;
        //  next();
     }
   
    
}
const vardiyeEKle=(req,res)=>{
    
    // const cookieSyf=req.headers.cookie;
    // const calisanKodu=cookieSyf.split("=")[0];


    const token=req.cookies.jwt
    console.log("check user cokie token : "+token)
    if(token){
        jwt.verify(token,"gizlikelime",async (err,decodedToken)=>{
            if(err){
                console.log(err)
            //    res.locals.userm=null
            }
            else{
                console.log(decodedToken)
                let user=await User.findById(decodedToken.id)
                // res.locals.userm=user
                // next();
                const calisanKodu=user.email;
                Calisanlar.find({calisanKodu,calisanKodu})
    
                .then(calisanKodu=>{
                    if(calisanKodu){
                    console.log("ad"+calisanKodu);
                    const calisanlar=calisanKodu;
                    console.log(calisanlar.length)
                    
                    res.render("vardiyaEkleme",{
                        calisanlar,
                        
                        
                        })
                    }
            
                })
                        }
                    })
    }
    else{
        // res.locals.userm=null;
        // next();
    }
    

   // res.render("vardiyaEkleme");
}
const vardiyeEKlePost=(req,res)=>{
    // const cookieSyf=req.headers.cookie;
    //  const calisanKodu=cookieSyf.split("=")[0];



    //  console.log(calisanKodu)


     const token=req.cookies.jwt
     console.log("check user cokie token : "+token)
     if(token){
         jwt.verify(token,"gizlikelime",async (err,decodedToken)=>{
             if(err){
                 console.log(err)
                // res.locals.userm=null
             }
             else{
                 console.log(decodedToken)
                 let user=await User.findById(decodedToken.id)
                    const calisanKodu=user.email;
                 const {bat,bat2,bat3,bat4}=req.body;
                console.log(req.body);
                console.log(bat+"  "+bat2+" "+bat3+" "+bat4);
                // const calisanlar=new Calisanlar({
                //     name:"ahmet2",
                //     bolum:"bilg",
                //     email:"ahbat@adf",
                //     calisanKodu:calisanKodu
                // })
                // calisanlar.save();
            
                Calisanlar.findOneAndUpdate(
                    {
                        name:bat3,
                        calisanKodu:calisanKodu
                    },
                    {
                    $push:{
                        bat:bat,
                        bat2:bat2,
                        tarih:bat4,
                        

                    }
                    },
                    {new:true},
                    (err,doc)=>{
                        if(err){
                            console.log("hata oldu aghaa")
                        }
                        else{
                            console.log("VardiyaEkleme ="+doc);
                            res.redirect("../yonetici");
                        }
                    }
                )
                            //  res.locals.userm=user
                            //  next();
                        }
                    })
     }
     else{
        //  res.locals.userm=null;
        //  next();
     }
    


   // res.redirect("../yonetici");
 // res.render("vardiyaEkleme")
}

const vardiyaSilme=(req,res)=>{

    const nameindex=req.params.name_index;
    const name=nameindex.split("_")[0];
    const index=nameindex.split("_")[1];
    console.log(name+"----- "+index);
    if(index==0){
        Calisanlar.findOneAndUpdate(
            {
             name:name
            },
            {
                $unset:{
                    "bat.0":1,
                    "bat2.0":1,
                    "tarih.0":1
                }
                
    
            },
            (err,doc)=>{
                if(err){
                    console.log("hata oldu aghaa")
                }
                else{
                    console.log("VardiyaEkleme ="+doc);
                    res.redirect("/yonetici");
                }
            }
        )
        Calisanlar.findOneAndUpdate(
            {
                name:name
            },
            {
                $pull:{
                    "bat.0":null,
                    "bat2.0":null,
                    "tarih.0":null
                }
            }
        )
    }
    if(index==1){
        console.log("esiiittt111")
        Calisanlar.findOneAndUpdate(
            {
             name:name
            },
            {
                $unset:{
                    "bat.1":1,
                    "bat2.1":1,
                    "tarih.1":1
                }
                
    
            },
            (err,doc)=>{
                if(err){
                    console.log("hata oldu aghaa")
                }
                else{
                    console.log("VardiyaEkleme ="+doc);
                    res.redirect("../yonetici");
                }
            }
        )
        Calisanlar.findOneAndUpdate(
            {
                name:name
            },
            {
                $pull:{
                    "bat.1":null,
                    "bat2.1":null,
                    "tarih.1":null
                }
            }
        )
    }
    if(index==2){
        console.log("esiiitttttt222")
        Calisanlar.findOneAndUpdate(
            {
             name:name
            },
            {
                $unset:{
                    "bat.2":1,
                    "bat2.2":1,
                    "tarih.2":1
                }
                
    
            },
            (err,doc)=>{
                if(err){
                    console.log("hata oldu aghaa")
                }
                else{
                    console.log("VardiyaEkleme ="+doc);
                    res.redirect("/yonetici");
                }
            }
        )
        Calisanlar.findOneAndUpdate(
            {
                name:name
            },
            {
                $pull:{
                    "bat.2":null,
                    "bat2.2":null,
                    "tarih.2":null
                }
            }
        )
    }
    if(index==3){
        Calisanlar.findOneAndUpdate(
            {
             name:name
            },
            {
                $unset:{
                    "bat.3":1,
                    "bat2.3":1,
                    "tarih.3":1
                }
                
    
            },
            (err,doc)=>{
                if(err){
                    console.log("hata oldu aghaa")
                }
                else{
                    console.log("VardiyaEkleme ="+doc);
                    res.redirect("../yonetici");
                }
            }
        )
        Calisanlar.findOneAndUpdate(
            {
                name:name
            },
            {
                $pull:{
                    "bat.3":null,
                    "bat2.3":null,
                    "tarih.3":null
                }
            }
        )
    }
    if(index==4){
        Calisanlar.findOneAndUpdate(
            {
             name:name
            },
            {
                $unset:{
                    "bat.4":1,
                    "bat2.4":1,
                    "tarih.4":1
                }
                
    
            },
            (err,doc)=>{
                if(err){
                    console.log("hata oldu aghaa")
                }
                else{
                    console.log("VardiyaEkleme ="+doc);
                    res.redirect("../yonetici");
                }
            }
        )
        Calisanlar.findOneAndUpdate(
            {
                name:name
            },
            {
                $pull:{
                    "bat.4":null,
                    "bat2.4":null,
                    "tarih.4":null
                }
            }
        )
    }
    if(index==5){
        Calisanlar.findOneAndUpdate(
            {
             name:name
            },
            {
                $unset:{
                    "bat.5":1,
                    "bat2.5":1,
                    "tarih.5":1
                }
                
    
            },
            (err,doc)=>{
                if(err){
                    console.log("hata oldu aghaa")
                }
                else{
                    console.log("VardiyaEkleme ="+doc);
                    res.redirect("../yonetici");
                }
            }
        )
        Calisanlar.findOneAndUpdate(
            {
                name:name
            },
            {
                $pull:{
                    "bat.5":null,
                    "bat2.5":null,
                    "tarih.5":null
                }
            }
        )
    }
    if(index==6){
        Calisanlar.findOneAndUpdate(
            {
             name:name
            },
            {
                $unset:{
                    "bat.6":1,
                    "bat2.6":1,
                    "tarih.6":1
                }
                
    
            },
            (err,doc)=>{
                if(err){
                    console.log("hata oldu aghaa")
                }
                else{
                    console.log("VardiyaEkleme ="+doc);
                    res.redirect("../yonetici");
                }
            }
        )
        Calisanlar.findOneAndUpdate(
            {
                name:name
            },
            {
                $pull:{
                    "bat.6":null,
                    "bat2.6":null,
                    "tarih.6":null
                }
            }
        )
    }   
    if(index==7){
        Calisanlar.findOneAndUpdate(
            {
             name:name
            },
            {
                $unset:{
                    "bat.7":1,
                    "bat2.7":1,
                    "tarih.7":1
                }
                
    
            },
            (err,doc)=>{
                if(err){
                    console.log("hata oldu aghaa")
                }
                else{
                    console.log("VardiyaEkleme ="+doc);
                    res.redirect("../yonetici");
                }
            }
        )
        Calisanlar.findOneAndUpdate(
            {
                name:name
            },
            {
                $pull:{
                    "bat.7":null,
                    "bat2.7":null,
                    "tarih.7":null
                }
            }
        )
    }
    if(index==8){
        Calisanlar.findOneAndUpdate(
            {
             name:name
            },
            {
                $unset:{
                    "bat.8":1,
                    "bat2.8":1,
                    "tarih.8":1
                }
                
    
            },
            (err,doc)=>{
                if(err){
                    console.log("hata oldu aghaa")
                }
                else{
                    console.log("VardiyaEkleme ="+doc);
                    res.redirect("../yonetici");
                }
            }
        )
        Calisanlar.findOneAndUpdate(
            {
                name:name
            },
            {
                $pull:{
                    "bat.8":null,
                    "bat2.8":null,
                    "tarih.8":null
                }
            }
        )
    }
    if(index==9){
        Calisanlar.findOneAndUpdate(
            {
             name:name
            },
            {
                $unset:{
                    "bat.9":1,
                    "bat2.9":1,
                    "tarih.9":1
                }
                
    
            },
            (err,doc)=>{
                if(err){
                    console.log("hata oldu aghaa")
                }
                else{
                    console.log("VardiyaEkleme ="+doc);
                    res.redirect("../yonetici");
                }
            }
        )
        Calisanlar.findOneAndUpdate(
            {
                name:name
            },
            {
                $pull:{
                    "bat.9":null,
                    "bat2.9":null,
                    "tarih.9":null
                }
            }
        )
    }
    if(index==10){
        Calisanlar.findOneAndUpdate(
            {
             name:name
            },
            {
                $unset:{
                    "bat.10":1,
                    "bat2.10":1,
                    "tarih.10":1
                }
                
    
            },
            (err,doc)=>{
                if(err){
                    console.log("hata oldu aghaa")
                }
                else{
                    console.log("VardiyaEkleme ="+doc);
                    res.redirect("../yonetici");
                }
            }
        )
        Calisanlar.findOneAndUpdate(
            {
                name:name
            },
            {
                $pull:{
                    "bat.10":null,
                    "bat2.10":null,
                    "tarih.10":null
                }
            }
        )
    }
    if(index==11){
        Calisanlar.findOneAndUpdate(
            {
             name:name
            },
            {
                $unset:{
                    "bat.11":1,
                    "bat2.11":1,
                    "tarih.11":1
                }
                
    
            },
            (err,doc)=>{
                if(err){
                    console.log("hata oldu aghaa")
                }
                else{
                    console.log("VardiyaEkleme ="+doc);
                    res.redirect("../yonetici");
                }
            }
        )
        Calisanlar.findOneAndUpdate(
            {
                name:name
            },
            {
                $pull:{
                    "bat.11":null,
                    "bat2.11":null,
                    "tarih.11":null
                }
            }
        )
    }
    if(index==12){
        Calisanlar.findOneAndUpdate(
            {
             name:name
            },
            {
                $unset:{
                    "bat.12":1,
                    "bat2.12":1,
                    "tarih.12":1
                }
                
    
            },
            (err,doc)=>{
                if(err){
                    console.log("hata oldu aghaa")
                }
                else{
                    console.log("VardiyaEkleme ="+doc);
                    res.redirect("../yonetici");
                }
            }
        )
        Calisanlar.findOneAndUpdate(
            {
                name:name
            },
            {
                $pull:{
                    "bat.12":null,
                    "bat2.12":null,
                    "tarih.12":null
                }
            }
        )
    }
    if(index==13){
        Calisanlar.findOneAndUpdate(
            {
             name:name
            },
            {
                $unset:{
                    "bat.13":1,
                    "bat2.13":1,
                    "tarih.13":1
                }
                
    
            },
            (err,doc)=>{
                if(err){
                    console.log("hata oldu aghaa")
                }
                else{
                    console.log("VardiyaEkleme ="+doc);
                    res.redirect("../yonetici");
                }
            }
        )
        Calisanlar.findOneAndUpdate(
            {
                name:name
            },
            {
                $pull:{
                    "bat.13":null,
                    "bat2.13":null,
                    "tarih.13":null
                }
            }
        )
    }
    if(index==14){
        Calisanlar.findOneAndUpdate(
            {
             name:name
            },
            {
                $unset:{
                    "bat.14":1,
                    "bat2.14":1,
                    "tarih.14":1
                }
                
    
            },
            (err,doc)=>{
                if(err){
                    console.log("hata oldu aghaa")
                }
                else{
                    console.log("VardiyaEkleme ="+doc);
                    res.redirect("../yonetici");
                }
            }
        )
        Calisanlar.findOneAndUpdate(
            {
                name:name
            },
            {
                $pull:{
                    "bat.14":null,
                    "bat2.14":null,
                    "tarih.14":null
                }
            }
        )
    }
    if(index==15){
        Calisanlar.findOneAndUpdate(
            {
             name:name
            },
            {
                $unset:{
                    "bat.15":1,
                    "bat2.15":1,
                    "tarih.15":1
                }
                
    
            },
            (err,doc)=>{
                if(err){
                    console.log("hata oldu aghaa")
                }
                else{
                    console.log("VardiyaEkleme ="+doc);
                    res.redirect("../yonetici");
                }
            }
        )
        Calisanlar.findOneAndUpdate(
            {
                name:name
            },
            {
                $pull:{
                    "bat.15":null,
                    "bat2.15":null,
                    "tarih.15":null
                }
            }
        )
    }
    if(index==16){
        Calisanlar.findOneAndUpdate(
            {
             name:name
            },
            {
                $unset:{
                    "bat.16":1,
                    "bat2.16":1,
                    "tarih.16":1
                }
                
    
            },
            (err,doc)=>{
                if(err){
                    console.log("hata oldu aghaa")
                }
                else{
                    console.log("VardiyaEkleme ="+doc);
                    res.redirect("../yonetici");
                }
            }
        )
        Calisanlar.findOneAndUpdate(
            {
                name:name
            },
            {
                $pull:{
                    "bat.16":null,
                    "bat2.16":null,
                    "tarih.16":null
                }
            }
        )
    }

  
    // Calisanlar.findOneAndUpdate(
    //     {
    //      name:name
    //     },
    //     {
    //         $unset:{
    //             "bat.4":1,
    //             "bat2.4":1,
    //             "tarih.4":1
    //         }
            

    //     },
    //     (err,doc)=>{
    //         if(err){
    //             console.log("hata oldu aghaa")
    //         }
    //         else{
    //             console.log("VardiyaEkleme ="+doc);
    //             res.redirect("../yonetici");
    //         }
    //     }
    // )
    // Calisanlar.findOneAndUpdate(
    //     {
    //         name:name
    //     },
    //     {
    //         $pull:{
    //             "bat.4":null,
    //             "bat2.4":null,
    //             "tarih.4":null
    //         }
    //     }
    // )

    
}


module.exports={
    yoneticiSayfası,
    calisanlar,
    calisanEkleme,
    calisanEklemePost,
    vardiyeEKle,
    vardiyeEKlePost,
    vardiyaSilme,
    
}