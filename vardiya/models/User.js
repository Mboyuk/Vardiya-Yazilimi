const mongoose=require("mongoose");
const bcrypt=require("bcrypt");






const userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:[true,"isminizi giriniz"],
        
    },
    role:{
        type:String,
        default:"user",
        enum:["user","admin"]
    },

    password:{
        type:String,
        required:[true,"sifre giriniz"],
        
    },
    email:{
        type:String,
        required:true
    }


   

})

userSchema.statics.login=async function(email,password){
    const user=await this.findOne({email})
    //console.log(user+"seeeeeeeeeeeeeeee")
    // console.log(user+"kakakaka");
    if(user){
        // console.log("kullanici var");
        console.log("kullanici var");
        const auth=await bcrypt.compare(password,user.password);
        console.log(auth);
        if(auth){
            // console.log("43034sdjkfjsdjf")
            return user
        }
        else{
            throw Error("Hatalı parola... Lütfen kontrol edip tekrar deneyiniz...");
        }
    }
    else{
        throw Error("Kullanıcı kayıtlı değil");
    }

}

userSchema.pre("save",async function(next){
    const salt=await bcrypt.genSalt()
    this.password=await bcrypt.hash(this.password,salt)
    next();
})

const User=new mongoose.model("user",userSchema)
module.exports=User;