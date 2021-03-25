const { json } = require('body-parser');
const Mongoose  = require('mongoose');
const mutalFundsInvestment = require('../models/mutalFundsInvestment');
const MutualFundsInvestment = require('../models/mutalFundsInvestment');
// const mutualFund = require('../models/mutualFund');
const {ObjectID} = require('mongodb')


module.exports = {
    addMutualFundsInvestment : async(req, res) => {       
        try {
            const {UnitsBought,Nav,AmountInvested,MFId} =  req.body;
            if(!UnitsBought || !Nav || !AmountInvested || !MFId){
                return res.status(400).json({message:"please provide all ther details"})
            }          
            const InvestedUser =req.user.id;
            const investment = new MutualFundsInvestment ({
                UnitsBought:UnitsBought,
                Nav:Nav,
                AmountInvested:AmountInvested,
                userId: InvestedUser,
                MFId: MFId
            })
            investment.save((err, data)=>{
                if(err){
                    console.log(err)
                    return res.status(400).json({message:"can't be created 😢"})
                } else{
                    return res.status(200).json({message:"Succesfully invested ✌️", data})
                }
            })
        } catch (err) {
            console.log(err);
            return res.status(500).json({message:"Server Error 🙏"})
        }
    },

    getInvestmentDetails: async( req, res) => {
        try {
            const userId = req.user.id;
            const {MFId} = req.body

            const investment = await MutualFundsInvestment.aggregate([
                {
                  '$match': {
                    'MFId': ObjectID(MFId), 
                    'userId': ObjectID(userId)
                  }
                }, {
                  '$group': {
                    '_id': '$MFId', 
                    'totalUnits': {
                      '$sum': '$UnitsBought',
                    },
                    'AmountInvested':{
                        '$sum': '$AmountInvested'
                    }
                  }
                }
              ]).exec((err,data)=> {
                if(err){
                    return res.status(400).json({message:"Internal server error 😢"})
                } 
                else {
                    var count = data.length;         
                    return res.status(200).json({message:"Successfully Fteched ✌️",count,userId,data})
                }
            })
        } catch (err) {
            console.log(err);
            return res.status(500).json({message:"Server Error 🙏"})
        }
    },

    getMFlogs : async(req, res) => {
        try {
            const userId = req.user.id;
            await MutualFundsInvestment.find({userId},{_id:0,Nav:0}).exec((err,data)=>{

            console.log(data[1].userId)
            if(err){
                return res.status(400).json({message:"Internal server error 😢"})
            } else {
                if(data.UnitsBought ==0){
                    return res.status(400).json({message:"zero mf invested 😢"})
                    
                } else {
                    const totalunit = data.UnitsBought
                    console.log(totalunit)
                    return res.status(201).json({message:`${totalunit} any mf is added ✌️`,totalunit,data})
                }
            }
        })    
        } catch (error) {
            res.status(500).json({message:"Server error 🙏"})
        }    
    }
}