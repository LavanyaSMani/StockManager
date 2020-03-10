const Purchase=require('../models/Purchase')

module.exports.create=function(req,res){
    const body=req.body

    const purchase=new Purchase(body)
   purchase.save()
            .then(data=>{
                console.log("the puchase data are",data)
                console.log("data git ")
                data?res.json(data):res.json({})
            })
            .catch(err=>res.json(err))
}

module.exports.list=function(req,res){
    Purchase.find().populate('category',['_id','category_name']).populate('item',['id', 'item_Name','price_per_quantity'])
            .then(data=>{
                res.json(data)
            })
            .catch(err=>res.json(err))
}

module.exports.delete=function(req,res){
    const id=req.params.id
    Purchase.findByIdAndDelete({_id:id})
            .then(response=>{
                res.json(response)
            })
            .catch(err=>res.json(err))
}