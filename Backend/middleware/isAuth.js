const jwt = require('jsonwebtoken')
const  express = require('express');
const router = express.Router()


module.exports = {
    isAuth: (req, res, next) => {
        const token  = req.header('token');
        if(!token){
            return res.status(401).json({message:"Please login first", error:[], data:{}})
        }
        try {
            const decoded = jwt.verify(token,'jwt_secret');
            req.user = decoded.user;
            next();
        } catch (err) {
            console.log(err,"error")
            res.status(403).json({message:"Invalid token", error:[], data:{}})
        }
    }
}