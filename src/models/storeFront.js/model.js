'use strict';

const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String },
  price: { type: Number },
  inStock: { type: Number },
  description: { type: String },
  image: { type: String },
  quantityInCart: { type: Number },
});

const todoModel = mongoose.model('todo', todoSchema);

module.exports = todoModel;