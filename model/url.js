const mongoose = require("mongoose");

const URL_Schema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectURL: {


        type: String,
        required: true,
    },
    visitHistory: [{
        timestamp: {
            type: Number
        }
    }]
}, { timestamps: true })

const URL = mongoose.model("url", URL_Schema);

module.exports = URL;