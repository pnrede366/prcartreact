const mongoose = require("mongoose")

const order = mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId
    },
    quantity:{
        type:Number
    },
    user:{
        type:String
    },
    name:{
        type:String
    },
    mobile:{
        type:Number
    },
    address:{
        type:String
    },
    zipcode:{
        type:Number
    }

})

module.exports= mongoose.model("order",order)