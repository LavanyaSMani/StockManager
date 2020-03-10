const Order=require('../models/Order')


module.exports.create=function(req,res){
    const body=req.body
    const neworder=new Order(body)
    return neworder.save()
            .then(data=>{
                data?res.json(data):res.send({})
            })
}

module.exports.list=function(req,res){
    Order.find().populate('category',['id', 'category_name']).populate('item_name',['id', 'item_Name','price_per_quantity','size'])
         .then(data=>{
             data?res.json(data):res.json({})
         })
         .catch(err=>res.json(err))
}

module.exports.delete=function(req,res){
    const id=req.params.id
    Order.findByIdAndDelete({_id:id})
        .then(response=>{
            res.josn(response)
        })
        .catch(err=>res.json(err))
}