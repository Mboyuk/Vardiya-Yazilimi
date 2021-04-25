const mongoose=require("mongoose");
const bcrypt=require("bcrypt");






const calisanDemoSchema=new mongoose.Schema({

  name:{
    type:String
  },
  surname:{
      type:String
  },

    bat:{
        type:Array,
        default:[]
    } ,
    bat2:{
        type:Array,
        default:[]
    } 


   

})
const CalisanDemo=new mongoose.model("calisanDemo",calisanDemoSchema)
module.exports=CalisanDemo;