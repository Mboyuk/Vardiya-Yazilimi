const express=require("express");
const router=express.Router();
const User=require("../models/User");
const yoneticiController=require("../controllers/yoneticiController");



router.get("/yonetici",yoneticiController.yoneticiSayfası);
router.get("/yonetici/vardiyaEkleme",yoneticiController.vardiyeEKle);
router.post("/yonetici/vardiyaEkleme",yoneticiController.vardiyeEKlePost);
router.get("/yonetici/calisanlar",yoneticiController.calisanlar);
router.get("/yonetici/calisanlar/add",yoneticiController.calisanEkleme);
router.post("/yonetici/calisanlar/add",yoneticiController.calisanEklemePost);

router.delete("/yonetici/delete/:name_index",yoneticiController.vardiyaSilme);





module.exports=router;