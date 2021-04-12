const mongoose = require('mongoose');
const {objectId} = mongoose.Schema;


const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique:true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    profilePic: {
        type:String,
        default:"https://ibb.co/P6C4JVX"
    }
})

module.exports = mongoose.model('Admin', adminSchema);
