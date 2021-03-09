import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import mongoInit from './dbConnection/mongoConnection';
import healthRouter from './routes/healthRouter';


const app = express();


mongoInit();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(morgan('dev'));


app.use('/api',healthRouter)


const port = process.env.PORT || 3000;

app.listen(port,(err)=>{
    if(err){
        return res.status(404).json({message:"Server Error"})
    }
    console.log(`Server is running on port : ${port}`)
})