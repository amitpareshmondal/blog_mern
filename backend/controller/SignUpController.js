const UserDB=require("../models/user");
const PostUser=async (req,res)=>{
    try{
        console.log("yaha aa gaya");
        await UserDB.create({
            name:req.body.name,
            email:req.body.email,
            username:req.body.username
        }).then(()=>{
            res.status(201).send({
                status:true,
                message:"User added"
            })
        })
        .catch((e)=>{
            res.status(400).send({
                status:true,
                message:"bad format"
            })
        })
    }
  catch(e){
    console.log(e);
res.status(500).send({
    status:false,
    message:"error while adding user"
})
  }
}
module.exports={PostUser};