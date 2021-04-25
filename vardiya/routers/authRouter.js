const router=require("express").Router();
const authController=require("../controllers/authController");
const User=require("../models/User");

const a="/oturumAc";
router.get(`${a}`,authController.login_get);
router.post("/oturumAc",authController.login_post);
router.get("/kayit",authController.signup_get);
router.post("/kayit",authController.signup_post);
router.get("/logout",authController.logout_get);

module.exports=router;