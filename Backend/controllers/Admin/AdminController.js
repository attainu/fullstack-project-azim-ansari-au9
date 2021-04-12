const  bcrypt =  require('bcryptjs');
const { check, validationResult }  = require('express-validator');
const jwt = require('jsonwebtoken');
const Admin = require('../../models/Admin/AdminModel');
const User = require('../../models/userModel');
const mongoose = require('mongoose');



module.exports = {
    register:
    async(req,res)=>{
        const errors = validationResult(req);
            if (!errors.isEmpty()) {
            return res.status(422).json({ message: 'Parameter missing 😩', code: 422, errors: errors.array() })
            }
        try {
            let {name, email, password} = req.body
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            await Admin.findOne({email:email},(err,admin)=>{
                if(err){
                    return res.status(500).json({message:"Internal server error 😢"})
                }
                else if (!admin){
                    adminObj = {
                        name: name,
                        email: email,
                        password: hash
                    }
                    let admin = new Admin(adminObj);
                    admin.save((err,result)=>{
                        if(err) {
                            return res.status(500).json({message:"Internal server error 😢"})
                        } else{
                            return res.status(201).json({message:"Admin signup Successfully ✌️",result})                           
                        }
                    })
                }
                else {
                    return res.status(400).json({message:"Admin exist Already 😢"})
                }
            })
        } catch (err) {
            res.status(500).json({message:"Server error 🙏"});
        }
    },
    login: async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                data: {},
                errors: errors.array(),
                errorCode: 400,
                message: 'Unable to login'
            });
        }
        try {
            const admin = await Admin.findOne({email:req.body.email});
            if(!admin){
                return res.status(404).json({message:"Admin Not Registered 😩",errorCode: 404,})
            }
            const matchPassword = await bcrypt.compare(req.body.password,admin.password);
            if(!matchPassword){
                return res.status(422).json({message:"Incorrect email or password 😩", errorCode: 300,})
            }
            const token = jwt.sign(
                { admin: { id: admin.id } },
                'ADMIN_JWT_SECRET',
                (err, token)=>{
                    if(err){
                        return res.status(500).json({message:"Internal server error 😢", errorCode: 500})
                    }
                    var data = {adminData:admin,token}
                    return res.status(200).json({message:"User Logged in Successfully ✌️", data, errorCode: 200})
                }
            )
            res.cookie('p',token,{expire: new Date()+ 9999});
        } catch (err) {
            return  res.status(500).json({message:"Server error 🙏"});           
        }
    },

    logout: async(req, res) => {
        try {
            await res.clearCookie('p');
            res.status(200).json({message:"User Logged out successfully ✌️"})

        } catch (err) {
            res.status(500).json({message:"Server error 🙏"});           
        }
    },


    getAllUsers: async (req, res) => {
        try {
            await User.find().exec((err, data)=> {
                if(err){
                    res.status(400).json({message:"Internal server Error 😢"})
                }
                return res.status(200).json({message:"Succesfully fetched ✌️", data})
            })
        } catch (err) {
            console.log("err",err)
            res.status(500).json({message:"Server error 🙏"});  
        }
    },

    personalProfile: async(req, res) => {
        try {
            const userId = req.params.id;
            await User.findOne({_id:mongoose.Types.ObjectId(userId)},{name:1, email:1, status:1,profilePic:1,dob:1})
            .exec((err, userData)=>{
                if(!userData || err){
                    return res.status(400).json({message:"User not found 😩"})
                }
                return res.status(200).json({message:"User details Here ✌️!!", userData})
            })
        } catch (err) {
            res.status(500).json({message:"Server error 🙏"}); 
        }
    },
    editPersonalProfile: async(req, res) => {
        try {
            const userId = req.params.id;
            const {name, dob, profilePic, status} = req.body;
            await User.findOne({_id:mongoose.Types.ObjectId(userId)},{name:1, email:1, status:1,profilePic:1,dob:1})
            .exec((err, data)=>{
                if(err) {
                    return res.status(400).json({message:"Internal error 1 😢"})
                }
                if(name)
                data.name = name;
                if(dob)
                data.dob = dob;
                if(profilePic)
                data.profilePic = profilePic;
                if(status)
                data.status = status;
                data.save((err, result) => {
                    if(err) {
                        // console.log("object",err )
                        return res.status(400).json({message:"Internal error 2 😢"})
                    } else {
                        return res.status(200).json({message:"Successfully updated user details ✌️", result})
                    }
                })
            })
        } catch (err) {
            res.status(500).json({message:"Server error 🙏"}); 
        }
    },

    changeUserStatus : async(req, res) => {
        const errors = validationResult(req);
            if (!errors.isEmpty()) {
            return res.status(422).json({ message: 'Status Not available 😩', code: 422, errors: errors.array() })
            }
        try {
            const id = req.params.id;
            console.log(id)
            const {status} = req.body;
            await User.findById(id).exec((err,data) => {
                if(err) {
                    return res.status(400).json({message:"Internal server error 1 😢"})
                }
                data.status = status;
                data.save((err,result)=>{
                    if(err) {
                        return res.status(400).json({message:"Internal server error 2 😢",err})
                    }
                    return res.status(200).json({message:"Status Changed Successfully ✌️",result})
                })
            })
            
        } catch (err) {
            console.log(err);
            res.status(500).json({message:"Server error 🙏"})
            
        }
    }
}