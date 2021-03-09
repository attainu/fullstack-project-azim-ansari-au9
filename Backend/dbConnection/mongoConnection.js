import mongoose from 'mongoose';

require('dotenv').config();
//connecting database
const mongoInit = async ()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/Stock_Market",
        { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
        console.log("Connected to Database yeah !! ✌️")
    } catch (e) {
        console.log(error.message)
    }
}
    
module.exports = mongoInit;