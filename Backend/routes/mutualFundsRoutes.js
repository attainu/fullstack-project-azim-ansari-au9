const express = require('express');
const mutualFundController = require('../controllers/MutualFundController');
const middleware = require('../middleware/isAdmin')
const router = express.Router();


router.post('/createMutualFunds',middleware.isAdmin,mutualFundController.createMutualFunds)
router.put('/updateMutalFunds/:id',middleware.isAdmin,mutualFundController.updateMutualFunds);
router.delete('/removeMutualFund/:id',middleware.isAdmin,mutualFundController.removeMutualFunds);
router.get('/getMutualFunds', mutualFundController.getAllMutualFunds);
router.get('/singleMutualFund/:id', mutualFundController.getSingleMutualFunds);
router.get('/searchMutualFunds', mutualFundController.customSearch);



module.exports = router;