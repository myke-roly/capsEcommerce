const { Schema, model } = require('mongoose');
const bcryptjs = require('bcryptjs');

const UsersSchema = new Schema({
  name: {
    type: String,
    trim: true,
    require: true
  },
  lastName: {
    type: String,
    trim: true,
    require: true
  },
  email: {
    type: String,
    trim: true,
    require: true,
    unique: true
  },
  password: {
    type: String,
    trim: true,
    require: true
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
});

// encriptar password
UsersSchema.methods.encryptPassword = password => {
  const salt = bcryptjs.genSaltSync(10);
  return bcryptjs.hashSync(password, salt);
}

//authenticar user
UsersSchema.methods.validatePassword = function (password) {
  return bcryptjs.compareSync(password, this.password);
}

module.exports = model('User', UsersSchema);