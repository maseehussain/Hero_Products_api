const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Product = require('../models/product');
const Merchant = require('../models/merchant');

const merchantData = [
  {
    merchant: 'Amazon'
  },
  {
    merchant: 'Ebay'
  },
  {
    merchant: 'HMV'
  }
];

mongoose
  .connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => Merchant.create(merchantData))
  .then(merchants => {
    return Product.create([
      {
        product: 'Canon CanoScan 9000F Mark II Colour Scanner',
        price: '£159',
        merchant: merchants[0]
      }, {
        product: 'Epson Perfection V550 Photo Scanner with ReadyScan LED Technology',
        price: '£179',
        merchant: merchants[1]
      }, {
        product: 'Nintendo Switch Console (Neon) with Mario & Rabbids Kingdom Battley',
        price: '299',
        merchant: merchants[2]
      },
    ])
  })
  .then(products => console.log(`${products.length} products created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
