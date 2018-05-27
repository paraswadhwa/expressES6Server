import { Router } from 'express';
import carController from "../controllers/test.controller";
import { testMiddleware, authenticate } from '../middleware/middleware';

const router = new Router();

router.post('/generateToken', carController.generateToken);

router.post('/addcar', carController.addCar);

router.get('/fetchAllcars', testMiddleware, carController.getAllCars);

router.get('/removeCar/:id', authenticate, carController.removeCar);
// car can only be deleted be an authenticated user

export default router;