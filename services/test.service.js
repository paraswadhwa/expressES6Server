import Car from '../models/test.model';

let service = {};

service.getAll = () => {
    return Car.find({});
}

service.addCar = (carName) => {
    let carToAdd = Car({
        name: carName
    });
    return carToAdd.save();
}

export default service;