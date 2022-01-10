const Cart = require("../Model/Cart")
const product = require("../Model/Server")

exports.addToCart=async(req,res)=>{

    const data = await Cart.create(req.body)
    res.status(200).json({
        success:true,
        message:"cart added successfully"
    })

}

exports.updateCart= async(req,res)=>{


    res.status(200).json({
        success:true,
        message:"cart updated"
    })


}


exports.getCart= async(req,res)=>{

    const data = await Cart.findOne({userid:req.body.userid,productid:req.body.productid})
 
if (data) {
    res.status(200).json({
        success:true,
        data:data,
        message:"already in cart"
    })
}
else{
    res.status(200).json({
        success:false,
        message:"not in cart"
    })
}


}


exports.getCartProducts=async(req,res)=>{

    
    const data=await Cart.find({userid:req.params.userid})
    let arr=[]
    let newprod=[]
    // console.log(data.length);
    for (let index = 0; index < data.length; index++) {
    let newarr=await product.findOne({_id:data[index].productid})
    arr.push(newarr)
    

    }


    // console.log(arr);   
 
    if (data) {
    
            
            
        
        res.status(200).json({
            success:true,
            data:data,
            arr,
           
            message:"cart fetched"
        })
    }
    else{
        res.status(200).json({
            success:false,
            message:"cart empty"
        })
    }
    
}


exports.removeCart=async(req,res)=>{
    console.log(req.body);
    const data= await Cart.deleteOne({productid:req.body.id,userid:req.body.userid})

    res.status(200).json(
        {
            success:true,
            message:"produt removed successfully"
        }
    )

}