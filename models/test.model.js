import mongoose from 'mongoose';

const CarSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true, index: true }
}, { collection: 'Car' });

let CarsModel = mongoose.model('Car', CarSchema);

export default CarsModel;