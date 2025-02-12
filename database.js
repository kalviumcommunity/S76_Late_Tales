<<<<<<< HEAD
const mongoose = require("mongoose");
const connectDatabase = ()=>{
    mongoose
    .connect(process.env.DB_URL)
    .then((data)=>{
        console.log(`MongoDB connected with server: ${data.connection.host}`)
    })
    .catch((err)=>{
        console.log(`Database connectio failed: ${err.message}`)
        process.exit(1)
    })
}

module.exports = connectDatabase;
=======
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};

module.exports = connectDB;
>>>>>>> ac0839ca097d4bb8b1841e1ef8913f56e20c4d1d
