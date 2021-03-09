const express = require('express');
const healthController = require('../controllers/healthController');

const router = express.Router();


router.get('/health',healthController.health)


module.exports = router;