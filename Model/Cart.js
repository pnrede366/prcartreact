
const mongoose = require("mongoose")

const Cart = mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId
    },
    productid:{
        type:mongoose.Schema.Types.ObjectId

    },  
    quantity:{
        type:Number
    }
})

module.exports = mongoose.model("Cart",Cart)