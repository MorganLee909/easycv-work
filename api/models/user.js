const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: String,
    lastName: String,
    languages: [{
        name: String,
        level: String
    }],
    skills: [String],
    cvs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "cv"
    }]
});

module.exports = mongoose.model("user", UserSchema);