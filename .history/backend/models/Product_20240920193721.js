// models/Product.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true,
  },
  serialNumber: {
    type: String,
    required: true,
    unique: true,
  },
  orderDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('Product', ProductSchema);
