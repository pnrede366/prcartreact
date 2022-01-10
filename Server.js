const express=require("express")
const mongoose=require("mongoose")
const cors = require("cors")
const res = require("express/lib/response")
const routes = require("./Routes/Server")
const app = express()
const PORT = process.env.PORT || 4000
const url = "mongodb+srv://demo:demo@cluster0.xgbfl.mongodb.net/prcart?retryWrites=true&w=majority"

app.use(express.json())
app.use(cors())
if (process.env.NODE_ENV=="production") {
    app.use(express.static("./Public/"))
    
}
mongoose.connect(url,()=>{console.log("db connected")})
app.listen(PORT,()=>{
    console.log("server started at 4000");
})

app.use('/',routes)

