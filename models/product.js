const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  product: { type: String },
  price: { type: String },
  company: { type: mongoose.Schema.ObjectId, ref: 'Merchant' }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
