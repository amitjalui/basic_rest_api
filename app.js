const dotenv = require('dotenv');
const express = require('express');
const connectDB = require('./db/connect.js');
const products_routes = require('./routes/products.js');

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hi, I am live.');
});

// middleware to or set router
app.use('/api/products', products_routes);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} is connected`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();