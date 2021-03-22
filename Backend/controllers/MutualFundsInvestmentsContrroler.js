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
            const investment = await MutualFundsInvestment.find({userId}).exec((err,data)=> {
                if(err){
                    return res.status(400).json({message:"Internal server error"})
                } else {
                    return res.status(200).json({message:"Successfully Fteched",userId,data})
                }
            })
        } catch (err) {
            console.log(err);
            return res.status(500).json({message:"Server Error "})
        }
    }
}