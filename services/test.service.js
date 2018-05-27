import Car from '../models/test.model';

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

export default service;