const express=require("express");
const LoginController =require("../controller/LoginControler");
const router=express.Router();
router.get("/",(req,res)=>{
    LoginController.login(req,res);
})
module.exports=router;