const Mongoose  = require('mongoose');
const MutualFundsInvestment = require('../models/mutalFundsInvestment');
const MutualFund = require('../models/mutualFund')
const {ObjectID} = require('mongodb');
const mutualFund = require('../models/mutualFund');
// const { findById } = require('../models/mutalFundsInvestment');


module.exports = {

    addMutualFundsInvestment : async(req, res) => {       
        try {
            const {UnitsBought,AmountInvested,MFId} =  req.body;
            if(!AmountInvested || !MFId){
                return res.status(400).json({message:"please provide all ther details"})
            }          
            const InvestedUser =req.user.id;
            var price = 0
            await mutualFund.findOne({_id: MFId}).then((data) => {
                price = data.Net_Asset_Value
            }).catch(() => res.status(400).json({message:"error occurs"}))
            const investment = new MutualFundsInvestment ({
                UnitsBought:AmountInvested/price,
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


    // addMutualFundsInvestment : async(req, res) => {       
    //     try {
    //         const {AmountInvested,MFId} =  req.body;
    //         if(!AmountInvested || !MFId ){
    //             return res.status(400).json({message:"please provide all ther details"})
    //         }  
    //         const mf =  await MutualFund.find({_id:MFId},{Net_Asset_Value:1}, (err, result)=>{
    //             if(err){
    //                 return res.status(400).json({message:"something went wrong"})
                    
    //             }
    //             let Net_Asset_Value = result[0].Net_Asset_Value
    //             return res.status(200).json({message:"sucess!!", done:result})
                
    //         })
    //         console.log("navvvv", Net_Asset_Value)
    //         const InvestedUser = req.user.id;
    //         const investment = new MutualFundsInvestment ({
    //             UnitsBought:totalBought,
    //             AmountInvested:AmountInvested,
    //             userId: InvestedUser,
    //             MFId: MFId,
    //         })            
    //          await function getAllUnitBought(AmountInvested, Net_Asset_Value) {
    //             const totalBought = AmountInvested/Net_Asset_Value;
    //             return totalBought
    //             // return AmountInvested/Net_Asset_Value;
    //         } 
    //         getAllUnitBought(AmountInvested,Net_Asset_Value);
            
    //         investment.save((err, data)=>{
    //             if(err){
    //                 console.log(err)
    //                 return res.status(400).json({message:"can't be created 😢"})
    //             } else{
    //                 return res.status(200).json({message:"Succesfully invested ✌️", data})
    //             }
    //         })
    //     } catch (err) {
    //         console.log(">>>>>>>>>>>",err);
    //         return res.status(500).json({message:"Server Error 🙏"})
    //     }
    // },

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
            console.log(err)
            res.status(500).json({message:"Server error 🙏"})
        }    
    }
}


