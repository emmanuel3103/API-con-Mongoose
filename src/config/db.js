require('dotenv').config();
const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado a MongoDB con Mongoose ✅");
    } catch (error) {
        console.log("Error al conectar a MongoDB ❎", error);
    }
}

module.exports = connectDB;
