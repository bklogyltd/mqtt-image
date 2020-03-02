var  mongoose = require('mongoose');
var config = require('../../config/environment');

mongoose.Promise = global.Promise
mongoose.connect(config.MONGO_URI, {
    // useMongoClient: true
})
// mongoose.connect(process.env.MONGODB_URI, {
//     useMongoClient: true
// })

var db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection mongo error'))
db.on('connected', () => {
    console.log('Connected to mongodb')
})

require('../mqtt/mqtt')
require('../emulator_server/server');

module.exports = mongoose