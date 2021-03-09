const express =require('express');
const bodyParser =require('body-parser');
const cors =require('cors');
const morgan =require('morgan');
const mongoInit =require('./dbConnection/mongoConnection');
const healthRouter =require('./routes/healthRouter');
const userRouter =require('./routes/userRoutes');

const app = express();
mongoInit();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(morgan('dev'));


app.use('/api',healthRouter)
app.use('/api',userRouter)


const port = process.env.PORT || 3000;

app.listen(port,(err)=>{
    if(err){
        return res.status(404).json({message:"Server Error"})
    }
    console.log(`Server is running on port : ${port}`)
})