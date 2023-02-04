const express=require("express");
const LoginRoute=require("./login");
const SignupRoute=require("./signup");
const router=express.Router();
router.get("/",(req,res)=>{
    res.send("This is reservd");
})
router.use("/login",LoginRoute);
router.use("/signup",SignupRoute);
module.exports=router;