const express=require("express");
const router=express.Router();
const User=require("../models/User");
const kullaniciController=require("../controllers/kullaniciController");



router.get("/kullanici",kullaniciController.kullaniciSayfası);
router.get("/kullaniciOturum",kullaniciController.kullaniciOturumAcGet);
router.post("/kullaniciOturum",kullaniciController.kullaniciOturumAcPost);



module.exports=router;