const mongoose = require("mongoose");

const cvSchema = mongoose.Schema({
    jobTitle: {
        type: String,
        required: true
    },
    jobCategory: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        min: 0,
        required: true
    },
    skills: 
    workHistory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "employer"
    }]
});

module.exports = mongoose.model("cv", cvSchema);