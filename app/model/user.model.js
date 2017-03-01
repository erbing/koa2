const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
      title:String,
      likes:Number,
      url:String,
      description: String
    })

module.exports = mongoose.model('User',UserSchema);