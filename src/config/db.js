require('dotenv').config();
const mongoose = require("mongoose");

const dbState = [
    { value: 0, label: "disconnected" },
    { value: 1, label: "connected" },
    { value: 2, label: "connecting" },
    { value: 3, label: "disconnecting" },
];
mongoose.set('strictQuery', false);
const connection = async () => {
    try {
        const options = {
            // user: process.env.DB_UERS,
            // pass: process.env.DB_PASSWORD,
            dbname: process.env.DB_NAME
        };
        await mongoose.connect('mongodb://localhost:27017?authSource=admin', options);
        const state = Number(mongoose.connection.readyState);
        console.log(dbState.find(f => f.value === state).label, "to db");
    } catch (error) {
        console.log("check connection", error)
    }

}
module.exports = connection;