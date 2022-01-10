const admin = require("../Model/Admin")


exports.getAdmin=async(req,res)=>{
    const {name,password} = req.body;
    const data = await admin.findOne({name,password})
   
   try {
    if (data!=null) {
        res.status(200).json({
            success:true,
            data:data,
            message:"login data"
        })
        
    }
    else{
        res.status(200).json({
            data:data,
            message:"failded no user found"
        })
    }

   } catch (error) {
            console.log(error);       
   }
}
