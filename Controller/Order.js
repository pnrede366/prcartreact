const order = require("../Model/Orders")

exports.addOrder=async(req,res)=>{

    const data = await order.create(req.body)

    res.status(200).json({
        succeess:true,
        message:"order successfull"
    })
}


exports.getOrders=async(req,res)=>{

    const data = await order.find({user:req.params.id})

    res.status(200).json({
        succeess:true,
        data:data,
        message:"order successfull"
    })
}