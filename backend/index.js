const express=require("express");
const cors=require("cors");
const route=require("./routes/index");
const app=express();
const db=require("./db");
app.use(cors({
    origin:'*'
}));
db.connect();
app.use("/api",route);
app.get("/",(req,res)=>{
    res.send("Api is working");
})
app.listen(5000,()=>{
    console.log("Server is running");
})