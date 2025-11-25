import mongoose from "mongoose"



const userSchmea = new mongoose.Schema({
    name:{
       type: String, 
       required:true 
    },
    email:{
       type: String, 
       required:true,
       unique:true
    },
    name:{
       type: String, 
       required:true 
    },
})

const Usermodal = mongoose.model('users',userSchmea);

module.exports=Usermodal;