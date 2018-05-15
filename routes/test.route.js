import { Router } from 'express';
import carController from "../controllers/test.controller";
import { logger } from '../middleware/middleware';

const router = new Router();
router.get('/allcars', carController.getAll);

router.post('/addcar', (req, res) => {
    carController.addCar(req, res);
});

router.get('/fetchAllcars', logger, carController.getAll);

export default router;