const Item=require('../models/Item')

module.exports.create=function(req,res){
    const body=req.body
    const item=new Item(body)
    item.save()
        .then(it=>{
            res.json(it)
        })
        .catch(err=>res.json(err))
}

module.exports.list=function(req,res){
    Item.find().populate('category',['id', 'category_name'])
        .then(data=>{
            res.json(data)
        })
        .catch(err=>res.json(err))
}