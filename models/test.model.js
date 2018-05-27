import mongoose from 'mongoose';

const CarSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true
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