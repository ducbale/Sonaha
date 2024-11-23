const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: { type: String, require: true },
    address: String,
    phone: String,
    email: String,
    Image: String,
    description: String,
},
    { timestamps: true }
)
const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;