const express = require('express');
const healthController = require('../controllers/healthController');
const middleware = require('../middleware/isAuth')

const router = express.Router();

router.get('/health',healthController.health)
router.get('/healthProtected',middleware.isAuth,healthController.protectedHealth)


module.exports = router;