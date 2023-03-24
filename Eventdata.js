const { Schema, default: mongoose } = require("mongoose");

const events = new mongoose.Schema({
    title: {
        type: String,
        require : true
    },
    description: {
        type: String,
        require : true
    },
    location: {
        type: String,
        require : true
    },
    startTime: {
        type: String,
        require : true
    },
    endTime: {
        type: String,
        require : true
    }
})

const eventdata = mongoose.model("Events", events)

module.exports = eventdata;