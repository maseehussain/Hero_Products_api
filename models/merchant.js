const mongoose = require('mongoose');

const merchantSchema = new mongoose.Schema({
  merchant: { type: String, required: true }
});

module.exports = mongoose.model('Merchant', merchantSchema);
