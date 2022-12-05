const express = require('express');
const products_routes = require('./routes/products.js')

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hi, I am live.');
});

// middleware to or set router
app.use('/api/products', products_routes);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`${PORT} is connected`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();