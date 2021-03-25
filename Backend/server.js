const express =require('express');
const bodyParser =require('body-parser');
const cors =require('cors');
const morgan =require('morgan');
const mongoInit =require('./dbConnection/mongoConnection');
const healthRouter =require('./routes/healthRouter');
const userRouter =require('./routes/userRoutes');
var cookieParser = require('cookie-parser');
const adminRouter = require('./routes/Admin/AdminRoutes');
const mutualfundsRouter = require('./routes/mutualFundsRoutes')

const app = express();
mongoInit();

//static file
// app.use(express.static('../frontend/build'))
//     const path = require('path')
//     app.get("*",(req,res)=>{
//         res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
//     })

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());

//admin Routes
app.use('/api/admin',adminRouter)

//user Routes
app.use('/api',healthRouter)
app.use('/api',userRouter)

//mutual funds
app.use('/api',mutualfundsRouter)


const port = process.env.PORT || 3000;

app.listen(port,(err)=>{
    if(err){
        return res.status(404).json({message:"Server Error "})
    }
    console.log(`Server is running on port : ${port} 🔥`)
})