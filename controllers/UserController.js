const User=require('../Models/User')
//const mongoose=require('mongoose')

module.exports.register=function(req,res){
    const body=req.body
    const user=new User(body)
    console.log("the length of db is",User.count())
    // if(user.role!=='admin')
    user.save()
        .then(record=>{
            record?res.send({'id':record._id,'name':record.name,'token':record.tokens}):res.send("try once more")
        })
        .catch(err=>res.json(err))
    }
    // else{
    //     res.send("u can't register,try again")
    // }


module.exports.login=function(req,res){
    const name=req.body.name
    const password=req.body.password
    console.log("in login function")
    User.findByCredentials(name,password)
        .then(function(user){
            console.log("got the use from findBycCredentials",user)
            
            return user.generateToken()
        })
        .then(function(token){
            console.log("got tpoken from generate token function",token)
            return res.json({token})
        })
        .catch(err=>res.json(err))
}

// module.exports.logout=function(req,res){
//     // const id=req.params.id
//     // console.log(id)
//     const token=req.header('x-auth')
//     let user
//     User.findByToken(token)
//         .then(function(user){
//             if(user){
//                 console.log("found user for given token",user)
//                 req.user=user
//                 req.token=token
//             }
//             else{
//                 res.send("u hv already logged out")
//             }
//         })
//         .catch(err=>res.json(err))
//     // console.log("in del function")
//     // console.log("the gievn user is",user)
    
//     User.findByIdAndDelete(user._id,{$pull:{tokens:{token:token}}})
//         .then(user=>{//console.log("got user so deleteing")
//             res.send("succefully loggedout")})
//         .catch(err=>res.json(err))
// }
    // const id=req.params.id
    // console.log(id)
    
    // console.log("in del function")
    // console.log("the gievn user is",user)
    


module.exports.delete=function(req,res){
    const id=req.params.id
    User.findByIdAndDelete({_id:id})
        .then(del=>{
            del?res.send("sucessfully deleted"):res.json({})
        })
        .catch(err=>res.json(err))
}

module.exports.list=function(req,res){
    User.find()
        .then(users=>{
            res.json(users)
        })
        .catch(err=>res.json(err))
}

// module.exports.change=function(req,res){
//     const name=req.name
//     const password=req.password
//     User.findByCredentials(name,password)
//         .then(user=>{

//         })
// }
