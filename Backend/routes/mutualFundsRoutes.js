const express = require('express');
const mutualFundController = require('../controllers/MutualFundController');
const middleware = require('../middleware/isAdmin')
const router = express.Router();


router.post('/createMutualFunds',middleware.isAdmin,mutualFundController.createMutualFunds)




module.exports = router;