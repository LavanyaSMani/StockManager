const mongoose=require('mongoose')
const Schema=mongoose.Schema

const itemSchema=new Schema({
    item_Name:{
        type:String
    },
    size:{
        type:String
        
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    price_per_quantity:{
        type:Number,
        required:true
    }
})

const Item=mongoose.model('Item',itemSchema)
module.exports=Item