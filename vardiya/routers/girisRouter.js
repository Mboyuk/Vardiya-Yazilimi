const express=require("express");
const router=express.Router();
const girisController=require("../controllers/girisController");






router.get("/giris",girisController.girisSayfasÄ±);



module.exports=router;