const { Schema, model } = require('mongoose');

const ProductScheme = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  colors: [
    {
      type: String,
    }
  ],
  talles: {
    type: String,
  },
  images: [
    { 
      type: String
    }
  ],
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = model('products', ProductScheme);
