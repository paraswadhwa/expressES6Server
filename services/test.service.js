import Car from '../models/test.model';
import { generateToken } from '../helpers/jwt';

let service = {};

service.getAllCars = () => {
    return Car.find({});
}

service.addCar = (data) => {
    return new Car(data).save();
}

service.removeCar = (id) => {
    return Car.findOneAndRemove({ carId: id });
}

service.generateToken = (id) => {
    return generateToken(id);
}

export default service;