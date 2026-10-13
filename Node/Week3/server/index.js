import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import authRoute from './route/authRoute.js'
dotenv.config()


const app = express()

connectDB()

app.use(cors())
app.use(express.json())
app.use("/api/users",authRoute)

const PORT = process.env.PORT || 3000


app.listen(PORT,()=>{
    console.log(`Successfully Server RUnning... http://localhost:${PORT}`);
    
})



// http://localhost:5000/api/users