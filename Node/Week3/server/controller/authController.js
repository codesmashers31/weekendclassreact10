import authmodel from "../models/authModel.js";

export const addData = async(req,res)=>{

    try {

        const {username,userage,useremail} = req.body

        if(username=="" || userage =="" || useremail==""){
              
            res.status(400).json({msg:"Please fill the Form"})
            return
        }

        const checkEMail = await authmodel.findOne({useremail})

        //  console.log(checkEMail);

        if(checkEMail){

            res.status(500).json({msg:"Already Register"})
            return
        }
         
        const add = await authmodel.create({username,userage,useremail})
        
        res.status(201).json({msg:"Successfully done",add})
        
    } catch (error) {


        console.log('error',error);
        
        
    }


}


export const getDatas = async (req,res)=>{


   try {
    
    const getDatasnew = await authmodel.find()

    res.status(200).json({usersdata:getDatasnew})

    
   } catch (error) {

      console.log('error',error);
    
   }



}


export const getById = async (req,res)=>{


    try {

        console.log(req.params);
        
    
        const {userid} = req.params


        const getbyid = await authmodel.findById(userid)

        console.log(getbyid);
        

        res.status(200).json({datas:getbyid})
        
        
    } catch (error) {
         console.log('error',error);
    }



}


export const deleteById = async(req,res)=>{


    try {
        const {userid} = req.params
       
        const deletedatas = await authmodel.findByIdAndDelete(userid)

        res.status(200).json({msg:"Sucessfully deleted"})

          
    } catch (error) {

        console.log('error',error);
        
        
    }

}