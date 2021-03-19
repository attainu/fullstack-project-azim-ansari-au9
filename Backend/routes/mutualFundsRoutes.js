const express = require('express');
const mutualFundController = require('../controllers/MutualFundController');
const middleware = require('../middleware/isAdmin')
const router = express.Router();


router.post('/createMutualFunds',middleware.isAdmin,mutualFundController.createMutualFunds)
router.put('/updateMutalFunds/:id',middleware.isAdmin,mutualFundController.updateMutualFunds);
router.get('/getMutualFunds', mutualFundController.getAllMutualFunds);



module.exports = router;