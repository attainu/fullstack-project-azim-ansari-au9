const { json } = require('body-parser');
const Mongoose  = require('mongoose');
const mutalFundsInvestment = require('../models/mutalFundsInvestment');
const MutualFundsInvestment = require('../models/mutalFundsInvestment');
// const mutualFund = require('../models/mutualFund');


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
            console.log(investment)
            console.log(investment.AmountInvested,"sbdhfdsh")
            investment.save((err, data)=>{
                if(err){
                    console.log(err)
                    return res.status(400).json({message:"can't be created"})
                } else{
                    return res.status(200).json({message:"Succesfully invested", data})
                }
            })
        } catch (err) {
            console.log(err);
            return res.status(500).json({message:"Server Error "})
        }
    },

    getInvestmentDetails: async( req, res) => {
        try {
            const userId = req.user.id;
            const MFId = req.body
            const investment = await MutualFundsInvestment.find({userId}).exec((err,data)=> {
                // console.log(investment)
                if(err){
                    return res.status(400).json({message:"Internal server error"})
                } 
                else {
                    var count = data.length;         
                    return res.status(200).json({message:"Successfully Fteched",count,userId,investment:data})
                }
            })
        } catch (err) {
            console.log(err);
            return res.status(500).json({message:"Server Error "})
        }
    }
}

// async function totalAmount(MFId,callback){
//     return new Promise((resolve, reject) => {
//         let where = {"MFId": Mongoose.Types.ObjectId(MFId)}
//         let col = {}
//         mutalFundsInvestment.find(where,col)
//             .then((investmentdata)=>{
//                 if(investmentdata.length>0){
//                     var investmentdata = JSON.parse(JSON.stringify(investmentdata))
//                     resolve(investmentdata.length)
//                 } else {
//                     resolve (0);
//                 }
//             })
//             .catch((err)=>{
//                 console.log(err, "err")
//             })
//     })
// }