const mongoose = require('mongoose');
const {objectId} = mongoose.Schema;

const userSchema = new mongoose.Schema({
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
    status: { 
        type: String, 
        enum: ['Inactive', 'Active', 'Delete'], 
        default: 'Active' 
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    upatedDate: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('user', userSchema)
