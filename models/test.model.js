import mongoose from 'mongoose';

const CarSchema = mongoose.Schema({

    carId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    yearOfManuf: {
        type: Number,
        required: true
    }
}, { collection: 'Car' });

let CarsModel = mongoose.model('Car', CarSchema);

export default CarsModel;