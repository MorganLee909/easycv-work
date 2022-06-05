const mongoose = require("mongoose");

const EmployerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("employer", EmployerSchema);