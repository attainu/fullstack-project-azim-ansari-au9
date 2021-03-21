const MutualFundsInvestment = require('../models/mutalFundsInvestment');


module.exports = {
    addMutualFundsInvestment : async(req, res) => {
        try {
            
        } catch (err) {
            console.log(err);
            return res.status(500).json({message:"Server Error "})
        }
    }
}