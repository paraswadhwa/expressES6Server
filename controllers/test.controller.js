import testService from '../services/test.service';

const controller = {};

controller.getAll = async(req, res) => {
    try {
        const cars = await testService.getAll();
        res.send(cars);
    } catch (err) {
        res.send('Got error in getAll');
    }
}

controller.addCar = async(req, res) => {
    try {
        const savedCar = await testService.addCar(req.body.name);
        res.send('added: ' + savedCar);
    } catch (err) {
        res.send('Got error in getAll');
    }
}

export default controller;