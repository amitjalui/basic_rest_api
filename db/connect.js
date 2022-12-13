const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const connectDB = (url) => {
    console.log('connect db');
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = connectDB; 