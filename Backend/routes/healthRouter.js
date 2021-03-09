import express from 'express';
import healthController from '../controllers/healthController';

const router = express.Router();


router.get('/health',healthController.health)


module.exports = router;