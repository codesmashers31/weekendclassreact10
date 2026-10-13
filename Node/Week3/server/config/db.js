import mongoose from "mongoose";



const connectDB = async ()=>{

   try {

    const conn =await mongoose.connect(process.env.MONGO_URI);
    console.log('Db Connected');
    
    
   } catch (error) {

    console.log('Something error',error);
    process.exit(1)
    
   }


}

export default connectDB;