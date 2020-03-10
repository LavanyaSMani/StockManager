const mongoose=require('mongoose')
const Schema=mongoose.Schema

const purchaseSchema=new Schema({
    company_name:{
            type:String,
            required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
   item:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Item'
       
    },
    dateOfPurchase:{
        type:Date,
        default:Date.now()

    },

    total_Amt:{
        type:Number
       
    },
    amt_paid:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number

    },
    price_per_quantity:{
        type:Number
    },
    balance:{
        type:Number
    }

})

purchaseSchema.pre('save',function(next){
    const purchase=this
    if(purchase.isNew)
    {
       const total=purchase.quantity*purchase.price_per_quantity
       purchase.total_Amt=total
       const bal=total-purchase.amt_paid
       purchase.balance=bal
        next()    
    }
    else{
        next()
    }

})
const Purchase=mongoose.model('Purchase',purchaseSchema)

module.exports=Purchase