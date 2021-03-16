const  bcrypt =  require('bcryptjs');
const { check, validationResult }  = require('express-validator');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const mongoose = require('mongoose');

module.exports = {
    signup:
    async(req,res)=>{
        const errors = validationResult(req);
            if (!errors.isEmpty()) {
            return res.status(422).json({ message: 'Parameter missing 😩', code: 422, errors: errors.array() })
            }
        try {
            let {name, email, password, status} = req.body
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            await User.findOne({email:email},(err,user)=>{
                if(err){
                    return res.status(500).json({message:"Internal server error 😢"})
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
                            return res.status(500).json({message:"Internal server error 😢"})
                        } else{
                            return res.status(201).json({message:"User signup Successfully ✌️",result})                           
                        }
                    })
                }
                else {
                    return res.status(400).json({message:"User exist Already 😢"})
                }
            })
        } catch (err) {
            res.status(500).json({message:"Server error 🙏"});
        }
    },

    login : 
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                data: {},
                errors: errors.array(),
                message: 'Unable to login'
            });
        }
        try {
            const user = await User.findOne({email:req.body.email});
            if(!user){
                res.status(400).json({message:"User Not Registered 😩"})
            }
            const matchPassword = await bcrypt.compare(req.body.password,user.password);
            if(!matchPassword){
                return res.status(422).json({message:"Incorrect email or password 😩"})
            }
            const token = jwt.sign(
                { user: { id: user.id } },
                'jwt_secret',
                (err, token)=>{
                    if(err){
                        res.status(500).json({message:"Internal server error 😢"})
                    }
                    var data = {userData:user,token}
                    return res.status(200).json({message:"User Logged in Successfully ✌️", data})
                }
            )
            res.cookie('c',token,{expire: new Date()+ 9999});
        } catch (err) {
            res.status(500).json({message:"Server error 🙏"});           
        }
    },
    profile: async(req, res) => {
        try {
            const userId = req.user.id;
            const userData = User.findOne({_id:mongoose.Types.ObjectId(userId)},{name:1, email:1, status:1,profilePic:1,dob:1})
            userData.exec((err, user)=>{
                if(!user || err){
                    return res.status(400).json({message:"User not found "})
                }
                var userDetails = {userData:user}
                return res.status(200).json({message:"User details Here !!", userDetails})
            })
        } catch (err) {
            res.status(500).json({message:"Server error 🙏"}); 
        }
    },

    logout: async(req,res)=>{
        try {
            await res.clearCookie('c');
            res.status(200).json({message:"User Logged out successfully ✌️"})

        } catch (err) {
            res.status(500).json({message:"Server error 🙏"});           
        }
    }
}


