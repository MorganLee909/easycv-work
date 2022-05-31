const mongoose = require("mongoose");

const EmployerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: Date,
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("employer", EmployerSchema);