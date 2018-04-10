const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Product = require('../models/product');
const Merchant = require('../models/merchant');

const merchantData = [
  {
    company: 'Amazon'
  },
  {
    company: 'Ebay'
  },
  {
    company: 'HMV'
  }
];

mongoose
  .connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => Merchant.create(merchantData))
  .then(Products => {
    return Product.create([
      {
        product: 'Canon CanoScan 9000F Mark II Colour Scanner',
        price: '£159'
        company: merchants[1]
      }, {
        product: 'Epson Perfection V550 Photo Scanner with ReadyScan LED Technology',
        price: '£179'
        company: merchants[2]
      }, {
        product: 'Nintendo Switch Console (Neon) with Mario & Rabbids Kingdom Battley',
        price: '299'
        company: merchants[3]
      },
    ])
  })
  .then(foodbanks => console.log(`${foodbanks.length} foodbanks created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
