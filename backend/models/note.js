const mongoose=require("mongoose")
const noteSchema=new mongoose.Schema({
    text:{type:String,req:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User',req:true}
},{timestamps:true,});

module.exports=mongoose.model("Note",noteSchema);