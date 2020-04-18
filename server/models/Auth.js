const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  }
});

module.exports = mongoose.model('user', UserSchema);