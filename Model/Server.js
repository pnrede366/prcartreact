const mongoose = require("mongoose")


const product = mongoose.Schema({
    name:{
        type:String
    },
    descr:{
        type:String
    },
    img:{
        type:String
    },
    price:{
        type:Number
    },
    stock:{
        type:Number
    },
    category:{
        type:String
    },
    quantity:{
        type:Number
    }
})

module.exports = mongoose.model("products",product)