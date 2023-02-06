const mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
    name : {
        type:String,
        required:[true,"Name is required"]
    },
    email: {
        type:String,
        required:[true,"Email is required"],
        unique:true
    },
    username:{
        type:String,
        required:[true,"username is required"],
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    verified:{
        type:Boolean,
        default:false
    }
});
module.exports=mongoose.model("User",UserSchema);