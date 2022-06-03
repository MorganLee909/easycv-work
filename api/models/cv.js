const mongoose = require("mongoose");

const cvSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    jobTitle: String,
    jobCategory: String,
    experience: {
        type: Number,
        min: 0,
        required: true
    },
    skills: [String],
    workHistory: [{
        employer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "employer"
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
    }]
});

module.exports = mongoose.model("cv", cvSchema);