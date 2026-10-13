import express from 'express'
import { addData, deleteById, getById, getDatas } from '../controller/authController.js'



// http://localhost:5000/api/users/register - insert
// http://localhost:5000/api/users/getdata - fetch

// http://localhost:5000/api/users/getdatabyid/6aca17dd1f7a424d40c944f0 - fetch by id
// http://localhost:5000/api/users/deletedata/6aca17dd1f7a424d40c944f0 - delete

const route = express.Router()


route.post("/register",addData)
route.get("/getdata",getDatas)
route.get("/getdatabyid/:userid",getById)
route.delete("/deletedata/:userid",deleteById)

export default route