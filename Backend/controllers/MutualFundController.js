const MutualFunds = require('../models/MutualFund')

module.exports = {
    createMutualFunds: async(req, res) => {
        try {
            const {Mutual_Fund_Family, Scheme_Category, Scheme_Name, Scheme_Type, Net_Asset_Value, Scheme_Code} = req.body;
            if(!Mutual_Fund_Family || !Scheme_Category || !Scheme_Name || !Scheme_Type || !Net_Asset_Value || !Scheme_Code) {
                return res.status(422).json({message:"Please provide all details 😩"})
            }
            await MutualFunds.findOne({Scheme_Code:Scheme_Code},(err,MutualFund)=> {
                if(err) {
                    return res.status(400).json({message:"Internal Error 1 😢"})
                } else if(!MutualFund){
                    mutualFUndsObj = {
                        Mutual_Fund_Family: Mutual_Fund_Family,
                        Scheme_Category: Scheme_Category,
                        Scheme_Name: Scheme_Name,
                        Scheme_Type: Scheme_Type,
                        Scheme_Code: Scheme_Code,
                        Net_Asset_Value: Net_Asset_Value
                    }
                    let mutualfunds = new MutualFunds(mutualFUndsObj);
                    mutualfunds.save((err, result) => {
                        if(err) {
                            return res.status(500).json({message:"Internal error 2 😢"})
                        } else{
                            return res.status(201).json({message:"Mutual funds Created successFully ✌️", result})
                        }
                    })
                }
                else{
                    return res.status(400).json({message:"this Sceme_code exist Already 😢"})
                }
            })
            
        } catch (err) {
            console.log("error>>", err);
            res.status(500).json({message:"Server error 🙏"})
        }

    }
}