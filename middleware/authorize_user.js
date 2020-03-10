// const User=require('../models/User')
// const authorizeUser=function(req,res,next){
//     const token=req.header('x-auth')
//     User.findByToken(token)
//         .then(function(user){
//             if(user){
//                 if(user.role=='admin')
//                 {console.log("found user for given token",user)
//                 req.user=user
//                 req.token=token
//                 next()}
//                 else{
//                     res.send("imporoper credentials")
//                 }
//             }
//             else{
//                 res.send("u hv already logged out")
//             }
//         })
//         .catch(err=>res.json(err))
// }

// module.exports={authorizeUser}