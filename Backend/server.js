const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoInit = require('./dbConnection/mongoConnection');
const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(morgan('dev'));


const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.status(200).json({message:"Hey Azim here!!, How may i help you ?"})
})

app.listen(port,(err)=>{
    if(err){
        return res.status(404).json({message:"Server Error"})
    }
    console.log(`Server is running on port :${port}`)
})