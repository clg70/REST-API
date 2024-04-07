require('dotenv').config();
const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('Mongodb connected successfully !');
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB;




