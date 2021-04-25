const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const { unsubscribe } = require("../routers/authRouter");






const calisanSchema=new mongoose.Schema({

    name:{
        type:String,
        required:[true,"isminizi giriniz"]
       // unique:true
    },
    
    bolum:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    calisanKodu:{
        type:String,

        require:true
    },
    bat:{
        type:Array,
        default:[]
    },
    bat2:{
        type:Array,
        default:[]
    },
    tarih:{
        type:Array,
        default: []
    },
    pass:{
        type:String,
        default:"SeverusSnape"
    }
    


   

})

calisanSchema.statics.login=async function(email,pass){
    const userk=await this.findOne({email,pass})
    //console.log(user+"seeeeeeeeeeeeeeee")
    // console.log(user+"kakakaka");
    if(userk){
        // console.log("kullanici var");
        console.log("kullanici var");
        //const auth=await bcrypt.compare(password,user.password);
        // console.log(auth);
         if(pass){
            // console.log("43034sdjkfjsdjf")
            return userk
        }
        // else{
        //     throw Error("Hatalı parola... Lütfen kontrol edip tekrar deneyiniz...");
        // }
    }
    else{
        throw Error("Kullanıcı kayıtlı değil");
    }

}





const Calisan=new mongoose.model("calisan",calisanSchema)
module.exports=Calisan;