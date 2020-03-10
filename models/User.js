const mongoose=require('mongoose')
const Schema=mongoose.Schema
const bcryptjs=require('bcryptjs')
 const jwt=require('jsonwebtoken')

const userSchema=new Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },

    password:{
        type:String,
        minlength:5,
        maxlength:200,
        required:true

    },

    role:{
        type:String,
        default:'user'
    },

    tokens:[
        {
            token:String

        }
    ]    
})

userSchema.pre('save',function(next){
    const user=this
    console.log("before saving",user)
    if(user.isNew)
    {
        bcryptjs.genSalt(10)
            .then(function(salt){
                bcryptjs.hash(user.password,salt)
                        .then(function(encrypt_pwd){
                            user.password=encrypt_pwd
                            console.log("in bcrypt",user.password)
                            next()
                           
                        })})
                       
             .catch(err=>Promise.reject(err))

    }
    else{
        next()
    }

})

userSchema.methods.generateToken=function(){
    const user=this
    const tokendata={
        _id:user._id,
        name:user.name,
        createdAt:Number(Date.now())
    }
    console.log("in genetare token function")
    const token=jwt.sign(tokendata,'hi')
    console.log("the toekn is",token)
    user.tokens.push({token:token})
    return user.save()
                .then(function(user){
                    console.log("giving token to then field")
                    console.log("after save the toekn is ",token)
                        return Promise.resolve(token)})
                .catch(function(err){Promise.reject(err)})
}

userSchema.statics.findByCredentials=function(name,password){
    const User=this
    //console.log("in credentoals")
    return User.findOne({name})
                .then(function(user){
                    console.log("getting user",user)
                   // console.log("in .then function")
                    if(!user)
                    {
                        Promise.reject("didnt get user invalid name/password")
                    }
                    //console.log("found user")
                    return bcryptjs.compare(password,user.password)
                    .then(function(result){
                        if(result)
                        {   console.log("got the password also n sending them ",result)
                            //return Promise.resolve(user)
                            return Promise.resolve(user)
                        }else{
                            return Promise.reject('invalid email/password')
                        }
                    })
   })
                    .catch(err=>Promise.reject(err))
}

userSchema.statics.findByToken=function(token){
    const User=this
    let tokendata
    try{
       tokendata= jwt.verify(token,'hi')
       console.log("checking the tokendata",tokendata)
    }
    catch{
        return Promise.reject("u dont hv previlage for this")

    }
    return User.findOne({_id:tokendata._id,'tokens.token':token})
}

// userSchema.statics.findByToken=function(token){
//     const User=this
//     let tokendata
//     try{
//        tokendata= jwt.verify(token,'hi')
//        console.log("checking the tokendata",tokendata)
//     }
//     catch{
//         return Promise.reject("u dont hv previlage for this")

//     }
//     return User.findOne({_id:tokendata._id,'tokens.token':token})
// }



// userSchema.methods.generateToken=function(){
//     const user=this
//     const tokendata={
//         _id:user._id,
//         name:user.name,
//         createdAt:Number(Date.now())
//     }
//     console.log("in genetare token function")
//     const token=jwt.sign(tokendata,'hi')
//     console.log("the toekn is",token)
//     user.tokens.push({token:token})
//     return user.save()
//                 .then(function(user){
//                     console.log("giving token to then field")
//                     console.log("after save the toekn is ",token)
//                         return Promise.resolve(user)})
//                 .catch(function(err){Promise.reject(err)})
// }

const User=mongoose.model('User',userSchema)


 
module.exports=User

