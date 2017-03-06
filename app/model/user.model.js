const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
      name:String,
      age:String
    })

module.exports = mongoose.model('User',UserSchema);