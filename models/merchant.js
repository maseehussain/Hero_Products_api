const mongoose = require('mongoose');

const merchantSchema = new mongoose.Schema({
  company: { type: String, required: true }
});

module.exports = mongoose.model('Merchant', merchantSchema);
