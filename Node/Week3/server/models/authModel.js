import mongoose from "mongoose";



const userAuthSchema = new mongoose.Schema({

  username:String,
  userage:Number,
  useremail:String



},{timestamps:true})


const authmodel = mongoose.model("students",userAuthSchema)

export default authmodel