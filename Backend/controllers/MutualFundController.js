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

    },
    getAllMutualFunds: async(req, res) => {
        try {
            await MutualFunds.find().exec((err, data)=> {
                if(err){
                    res.status(400).json({message:"Internal server Error 😢"})
                } else{
                    return res.status(200).json({message:"Succesfully fetched ✌️",data})
                }
            })
        } catch (err) {
            console.log("err",err)
            res.status(500).json({message:"Server error 🙏"});  
        }
    },

    getSingleMutualFunds: async(req, res) => {
        try {
            const mutualFundsId = req.params.id;
            await MutualFunds.findById(mutualFundsId).exec((err, data)=> {
                if(err) {
                    return res.status(400).json({message:"Internal Server error 1 😢"})
                } else {
                    return res.status(200).json({message:"Successfully fetched mutual fund ✌️", data})
                }
            })
        } catch (er) {
            return res.status(500).json({message:"Server Error 🙏"})
        }
    },

    updateMutualFunds : async(req, res) => {
        try {
            const mutualFundsId = req.params.id;
            const {Mutual_Fund_Family, Scheme_Category,Scheme_Name,Scheme_Type,Scheme_Code,Net_Asset_Value}  =  req.body;
            await MutualFunds.findByIdAndUpdate(mutualFundsId).exec((err, data) => {
                if(err) {
                    return res.status(400).json({message:"Internal Server error 1 😢"})
                } 
                // console.log(data)
                data.Mutual_Fund_Family = Mutual_Fund_Family;
                data.Scheme_Category = Scheme_Category;
                data.Scheme_Name = Scheme_Name;
                data.Scheme_Type = Scheme_Type;
                data.Scheme_Code = Scheme_Code;
                data.Net_Asset_Value = Net_Asset_Value;
                data.save((err,result) => {
                    if(err) {
                        return res.status(400).json({message:"Internal server error 2 😢"})
                    } else {
                        return res.status(200).json({message:"Succesfully updated ✌️",result})
                    }
                })
            })
            
        } catch (err) {
            console.log("err",err)
            res.status(500).json({message:"Server error 🙏"});  
        }
    },


    //Custom Search
    customSearch : async(req, res) => {
        const { Mutual_Fund_Family, Scheme_Category, Scheme_Name, Scheme_Type, Scheme_Code, numberOfResults} = req.body;
        try {
        const customFunds = await MutualFunds.find({   
            $or: [
                { Mutual_Fund_Family},
                { Scheme_Category},
                { Scheme_Name},
                { Scheme_Type},
                { Scheme_Code},
                ]
            }).limit(numberOfResults);
        res.status(200).json({ message: "request successfull", fundDetails: customFunds });
        } catch (err) {
            console.log(err)
            res.status(500).json({message: "Server Error" });
        }
    },


    removeMutualFunds : async(req, res) => {
        const Id = req.params.id;
        await MutualFunds.findById(Id).exec((err,data) => {
            // console.log(data)
            if(err) {
                return res.status(400).json({message:"Internal Server Error 1 😢"})
            }
            data.remove((err) => {
                if(err){
                    return res.status(400).json({message:"Internal server error 2 😢"})
                }
                else {
                    return res.status(200).json({message:"Succesfully Deleted ✌️"})
                }
            })
            
        })
    }
}