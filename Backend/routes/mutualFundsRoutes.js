const express = require('express');
const mutualFundsInvestment = require('../controllers/MutualFundsInvestmentsContrroler');
const mutualFundController = require('../controllers/MutualFundController');
const middleware = require('../middleware/isAdmin')
const authMiddleware = require('../middleware/isAuth')
const router = express.Router();

//mutual funds
router.post('/createMutualFunds',middleware.isAdmin,mutualFundController.createMutualFunds)
router.post('/updateMutalFunds/:id',mutualFundController.updateMutualFunds);
router.delete('/removeMutualFund/:id',middleware.isAdmin,mutualFundController.removeMutualFunds);
router.get('/getMutualFunds', mutualFundController.getAllMutualFunds);
router.get('/singleMutualFund/:id', mutualFundController.getSingleMutualFunds);
router.get('/searchMutualFunds', mutualFundController.customSearch);

//investment mutualFunds
router.post('/investment',authMiddleware.isAuth,mutualFundsInvestment.addMutualFundsInvestment)
router.get('/userInvestmentDetals',authMiddleware.isAuth, mutualFundsInvestment.getInvestmentDetails);
router.get('/particularUserInvestmentDetals',authMiddleware.isAuth, mutualFundsInvestment.getMFlogs);



module.exports = router;