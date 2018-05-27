import { Router } from 'express';
import carController from "../controllers/test.controller";
import { testMiddleware } from '../middleware/middleware';

const router = new Router();

router.post('/addcar', carController.addCar);

router.get('/fetchAllcars', testMiddleware, carController.getAllCars);

router.get('/removeCar/:id', carController.removeCar);

export default router;