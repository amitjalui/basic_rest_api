const dotenv = require('dotenv');
const connectDB = require('./db/connect');
const Product = require('./model/product.js');
const ProductJson = require('./products.json');

dotenv.config();

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
}

start();