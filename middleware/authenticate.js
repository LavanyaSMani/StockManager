const User=require('../models/User')

const authenticateUser=function(req,res,next){
    const token=req.header('x-auth')
    User.findByToken(token)
        .then(function(user){
            if(user){
                console.log("found user for given token",user)
                req.user=user
                req.token=token
                next()
            }
            else{
                res.send("u hv already logged out")
            }
        })
        .catch(err=>res.json(err))

}


// const authorizeUser=function(req,res){
//     const token=req.header('x-auth')
//     User.findByToken(token)
//         .then(function(user){
//             if(user){
//                 console.log("found user in authorize user",user)
//                 if(user.role==='admin')
//                 {
//                     req.user=user
//                     req.token=token
//                     next()
//                 }
//                 else{
//                     next()
//                 }
//             }
//             else{
//                 res.send("u r nt authorizes user")
//             }
//         })
//         .catch(err=>res.json(err))
// }

module.exports={authenticateUser}