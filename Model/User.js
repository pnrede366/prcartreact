const mongoose = require("mongoose")


const user = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    cpassword:{
        type:String
    },
    quantity:{
        type:Number
    }
})

module.exports = mongoose.model("user",user)