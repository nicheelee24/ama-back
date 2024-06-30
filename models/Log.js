const mongoose = require("mongoose");

const logsSchema = new mongoose.Schema({
    method: {
        type: String,
    },
    originalUrl: {
        type: String,
    },
    query: {
        type: Object,
    },
    ip: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model("logs", logsSchema);
