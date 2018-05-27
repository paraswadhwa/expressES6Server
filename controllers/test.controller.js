import testService from '../services/test.service';
import { success, failure, notFound } from '../helpers/sendResponse';
import rules from '../dataValidators/test.validator';
import { validate } from 'indicative';

// do all data sanitizing,data validations and response modification in this.

const controller = {};

controller.getAllCars = async(req, res) => {
    try {
        const cars = await testService.getAllCars();
        return success(res, cars);
    } catch (err) {
        return failure(res, err);
    }
}

controller.addCar = async(req, res) => {
    try {
        await validate(req.body, rules);
        const savedCar = await testService.addCar(req.body);
        return success(res, 'Car added successfully');
    } catch (err) {
        return failure(res, err);
    }
}

controller.removeCar = async(req, res) => {
    try {
        const removedData = await testService.removeCar(req.params.id);
        if (!removedData) {
            return notFound(res, 'No record present to remove');
        } else {
            return success(res, 'Record deleted successfully');
        }
    } catch (err) {
        return failure(res, err);
    }
}


export default controller;