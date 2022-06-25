const mongoose = require("mongoose");

const EmployerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

EmployerSchema.index({"name": "text"});

module.exports = mongoose.model("employer", EmployerSchema);