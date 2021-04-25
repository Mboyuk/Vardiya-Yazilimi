
const User=require("../models/User");

const girisSayfası=(req,res)=>{
    
    res.render("giris",{title:"Vardiya Uzmanı"});
}

module.exports={
    girisSayfası
}