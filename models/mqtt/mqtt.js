const mongoose = require('mongoose')

const schemeMQTT = new mongoose.Schema({
    client: {
        host: {
            type: String,
            required: true
        },
        port: {
            type: Number,
            required: true
        },
        username: {
            type: String
        },
        password: {
            type: String
        },
        token: {
            type: String
        }
    }, 
    server: {
        host: {
            type: String,
            required: true
        },
        port: {
            type: Number,
            required: true
        },
        username: {
            type: String
        },
        password: {
            type: String
        },
        token: {
            type: String
        }
    }
})

const MQTT = mongoose.model('MQTT', schemeMQTT)
//module.exports = Device
exports.default = MQTT