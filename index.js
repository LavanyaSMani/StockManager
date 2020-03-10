const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
const port=3002
const router=require('./config/router')
console.log("in backend")

mongoose.connect("mongodb://localhost:27017/StocksManager",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{console.log("connected to db")})
.catch(err=>console.log(err))
app.use(express.json())
app.use(cors())
app.use('/',router)

app.listen(port,()=>{console.log("lsitening to port",port)})

