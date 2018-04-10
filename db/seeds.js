const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Product = require('../models/product');

mongoose.connect(dbURI, { useMongoClient: true });

mongoose.connection.once('open', () => {
  mongoose.connection.db.dropDatabase();

  const productData = [{
    product: 'Trainers',
    price: '£20'
  }];

  Product
    .create(productData)
    .then(products => console.log(`${products.length} products created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
