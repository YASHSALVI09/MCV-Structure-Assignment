const {UserModel} = require("../models/UserSchema");

function getUser(req, res, next) {
    let email = req.body.email;

    
    if (!email) {
        return res.json({ error:"email not found"})
    }
    UserModel.findOne({ email }, (err, data) => {
        if (err) {
            return res.json({
                message:"not a valid user email"
            })
        } else {
                        
         
            return res.json({
                userdata :data
             
            })
        }
    })
}

module.exports = getUser;
