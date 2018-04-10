const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  product: { type: String },
  price: { type: String },
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
