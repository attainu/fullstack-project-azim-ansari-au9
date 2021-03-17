const  bcrypt =  require('bcryptjs');
const { check, validationResult }  = require('express-validator');
const jwt = require('jsonwebtoken');
const Admin = require('../../models/Admin/AdminModel');
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
                message: 'Unable to login'
            });
        }
        try {
            const admin = await Admin.findOne({email:req.body.email});
            if(!admin){
                res.status(400).json({message:"Admin Not Registered 😩"})
            }
            const matchPassword = await bcrypt.compare(req.body.password,admin.password);
            if(!matchPassword){
                return res.status(422).json({message:"Incorrect email or password 😩"})
            }
            const token = jwt.sign(
                { admin: { id: admin.id } },
                'ADMIN_JWT_SECRET',
                (err, token)=>{
                    if(err){
                        res.status(500).json({message:"Internal server error 😢"})
                    }
                    var data = {adminData:admin,token}
                    return res.status(200).json({message:"User Logged in Successfully ✌️", data})
                }
            )
            res.cookie('c',token,{expire: new Date()+ 9999});
        } catch (err) {
            res.status(500).json({message:"Server error 🙏"});           
        }
    }
}