const product = require('../Model/Server')


exports.getProduct= async(req,res)=>{
        const data = await product.find()


        res.status(200).json({
            success:true,
            message:"data get",
            data:data
        })
}


exports.createProduct=async(req,res)=>{

    const data = await product.create(req.body)
    res.status(200).json({
        success:true,
        message:"product added successfully"
    })

}

exports.deleteProduct=async (req,res)=>{

    const data = await product.findByIdAndDelete({_id:req.params.id})

    res.status(200).json({
        success:true,
        message:"product deleted"
    })

}


exports.updateProduct=async (req,res)=>{
   
        const data = await product.findByIdAndUpdate({_id:req.params.id},req.body)
    
        res.status(200).json({
            success:true,
            message:"product update"
        })
    
    }

    exports.singleProduct=async(req,res)=>{

        const data = await product.findById({_id:req.params.id})
        if (data) {
            res.status(200).json({
                success:true,
                data:data,
                message:"single product fetched"
            })
            
        }
        else{
            res.status(200).json({
                success:false,
                message:"sorry product not found"
            })
        }


    }