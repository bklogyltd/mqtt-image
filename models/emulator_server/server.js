const mongoose = require('mongoose')

const schemeServer = new mongoose.Schema({
    data: {
        type: Object
    }
})

const Server = mongoose.model('Server', schemeServer)
//module.exports = Device
exports.default = Server