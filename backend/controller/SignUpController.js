const UserDB=require("../models/user");
const bcrypt=require("bcrypt");
const PostUser=async (req,res)=>{
    var password="asdf";
    const hashedpassword=new Promise((resolve,reject)=>{
        bcrypt.hash(req.body.password,4, (err,hash)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(hash);
            }
           
        })
    })
    hashedpassword.then(async(hashedpassword)=>{
        try{
            password=hashedpassword;
            console.log(password);
            await UserDB.create({
                name:req.body.name,
                email:req.body.email,
                password:password,
                username:req.body.username
            }).then(()=>{
                res.status(201).send({
                    status:true,
                    message:"User added"
                })
            })
            .catch((e)=>{
                console.log(e);
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
    }) 
   
}
module.exports={PostUser};