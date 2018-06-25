const mongoose = require('mongoose');

const AdUnit = mongoose.Schema(
  {
    name: String,
    price: Number
  }
);

module.exports = mongoose.model('AdUnit', AdUnit);

