const mongoose = require('mongoose');

require('dotenv').config();
//connecting database
const mongoInit = mongoose.connect(process.env.DATABASE,{
    useUnifiedTopology: true, 
    useNewUrlParser: true,
    useCreateIndex: true,
    });
    
    mongoose.connection.on('connected',(err)=>{
        if(err) throw err
        console.log("database connected")
    });
    
    //(error handling ) when errors will be occur
    mongoose.connection.on('error', (err)=>{
        console.log("err connecting",err)
    });
    
module.exports = mongoInit;