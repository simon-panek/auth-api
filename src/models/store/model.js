'use strict';

const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String },
  price: { type: Number },
  inStock: { type: Number },
  description: { type: String },
  image: { type: String },
  quantityInCart: { type: Number },
});

const storeModel = mongoose.model('store', storeSchema);

module.exports = storeModel;