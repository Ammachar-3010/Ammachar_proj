const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    username:{type:String,req:true,unique:true},
    password:{type:String,req:true,unique:true}
});
module.exports=mongoose.model("user",userSchema);