const mongoose=require('mongoose')
const Item=require('./Item')
const Schema=mongoose.Schema

const orderSchema=new Schema({
    cust_name:{
        type:String,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true
    },
    item_name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Item'
    },
    quantity:{
        type:Number,
        required:true},
   
    amount_paid:{
        type:Number,
        required:true
    },
    total_amount:{
        type:Number
        
    },
    balance:{
        type:Number
    },
    date:{
        type:Date,
        default:Date.now()

    }
})

orderSchema.pre('save',function(next){
    const order=this
    if(order.isNew)
    {
        
        Item.findById({_id:order.item_name})
            .then(item=>{
                   let value=item.price_per_quantity
                    console.log("item found",item)
                    console.log("in pre save",value)
                    order.total_amount=value*order.quantity
                    next()
            })
            .catch(err=>Promise.reject(err))
        
    }
    else{
        next()
    }

})

const Orders=mongoose.model('Order',orderSchema)

module.exports=Orders