const express=require("express");
const LoginRoute=require("./login");
const router=express.Router();
router.get("/",(req,res)=>{
    res.send("This is reservd");
})
router.use("/login",LoginRoute);
module.exports=router;