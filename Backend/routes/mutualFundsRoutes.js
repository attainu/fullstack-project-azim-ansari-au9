const express = require('express');
const mutualFundsInvestment = require('../controllerS/MutualFundsInvestmentsContrroler');
const mutualFundController = require('../controllers/MutualFundController');
const middleware = require('../middleware/isAdmin')
const authMiddleware = require('../middleware/isAuth')
const router = express.Router();


router.post('/createMutualFunds',middleware.isAdmin,mutualFundController.createMutualFunds)
router.put('/updateMutalFunds/:id',middleware.isAdmin,mutualFundController.updateMutualFunds);
router.delete('/removeMutualFund/:id',middleware.isAdmin,mutualFundController.removeMutualFunds);
router.get('/getMutualFunds', mutualFundController.getAllMutualFunds);
router.get('/singleMutualFund/:id', mutualFundController.getSingleMutualFunds);
router.get('/searchMutualFunds', mutualFundController.customSearch);

//investment mutualFunds
router.post('/investment',authMiddleware.isAuth,mutualFundsInvestment.addMutualFundsInvestment)
router.get('/investmentDetals',authMiddleware.isAuth, mutualFundsInvestment.getInvestmentDetails);



module.exports = router;