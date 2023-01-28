const {UserModel} = require("../models/UserSchema");

function RegisterUser(req,res,next){
    let username = req.body.username;
    let email= req.body.email;
    let password = req.body.password;
    let userdata = {
        username: username,
        email: email,
        password:password
    }
    let result = new UserModel(userdata);
    result.save().then((item)=>{
        res.json({
            message:"registration successful"
        })
    }).catch((err)=>{
        return res.join({
            message:"Registration failed"
        })
    })
}
module.exports = RegisterUser;