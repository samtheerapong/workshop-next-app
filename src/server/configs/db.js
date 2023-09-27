import mongoose from "mongoose";

export const dbConnect = async () => {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/products');
        console.log('Connected to MongoDB');
    } catch (err) {
        console.log(err);
    }
}
