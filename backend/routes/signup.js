const express=require("express");
const SignupRoute=require("../controller/SignUpController")
const router=express.Router();
router.post("/",(req,res)=>{
    console.log(req.body);
    SignupRoute.PostUser(req,res);
})
router.get("/",(req,res)=>{
    res.send("get");
})
module.exports=router;