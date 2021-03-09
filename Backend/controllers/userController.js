const  bcrypt =  require('bcryptjs');
const { check, validationResult }  = require('express-validator');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

module.exports = {
    signup:
    async(req,res)=>{
        const errors = validationResult(req);
            if (!errors.isEmpty()) {
            return res.status(422).json({ message: 'Parameter missing', code: 422, errors: errors.array() })
            }
        try {
            let {name, email, password, status} = req.body
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            await User.findOne({email:email},(err,user)=>{
                if(err){
                    return res.status(500).json({message:"Internal server error"})
                }
                else if (!user){
                    userObj = {
                        name: name,
                        email: email,
                        password: hash,
                        status: status
                    }
                    let user = new User(userObj);
                    user.save((err,result)=>{
                        if(err) {
                            return res.status(500).json({message:"Internal server error1."})
                        } else{
                            return res.status(201).json({message:"User signup Successfully",result})                           
                        }
                    })
                }
                else {
                    return res.status(400).json({message:"User exist Already .."})
                }
            })
        } catch (err) {
            res.status(500).json({message:"Server error 🙏"});
        }
    },
}


