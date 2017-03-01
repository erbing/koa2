const mongoose = require('mongoose')
const config = require('./config.js')
mongoose.Promise = global.Promise
module.exports = function() {
    const db = mongoose.connect(config.mogodb)
    require('./../model/user.model.js')
    return db
}