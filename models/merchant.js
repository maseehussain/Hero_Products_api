const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  merchant: { type: String, required: true }
});

module.exports = mongoose.model('Company', companySchema);
