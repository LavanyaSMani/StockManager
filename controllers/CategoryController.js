const Category=require('../models/Category')

module.exports.create=function(req,res){
    console.log("in creating categories")

    const body=req.body
   console.log(body)
   const category=new Category(body)
   category.save()
            .then(data=>{
                data?res.json(data):res.send("try again")
            })
            .catch(err=>res.json(err))
}

module.exports.list=function(req,res){
    console.log("in categories list")
    Category.find()
            .then(list=>{
                list?res.json(list):res.json({})
            })
            .catch(err=>res.json(err))
}

module.exports.delete=function(req,res){
    const id=req.params.id
    Category.findByIdAndDelete({_id:id})
            .then(response=>{
               console.log("deleting",response)
               res.json(response)
            })
}