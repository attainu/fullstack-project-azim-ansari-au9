const express = require('express');
const mutualFundController = require('../controllers/MutualFundController');
const middleware = require('../middleware/isAdmin')
const router = express.Router();


router.post('/createMutualFunds',middleware.isAdmin,mutualFundController.createMutualFunds)
router.get('/getMutualFunds', mutualFundController.getAllMutualFunds);
router.put('/updateMutalFunds/:id',mutualFundController.updateMutualFunds);



module.exports = router;