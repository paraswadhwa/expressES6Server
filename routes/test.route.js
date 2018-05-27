import { Router } from 'express';
import carController from "../controllers/test.controller";
import { logger } from '../middleware/middleware';

const router = new Router();

router.post('/addcar', carController.addCar);

router.get('/fetchAllcars', carController.getAllCars);

//router.get('/fetchCarsByYrOfManuf', carController.getAll);

// router.get('/fetchAllcars', logger, carController.getAll);

export default router;