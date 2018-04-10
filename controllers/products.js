const Product = require('../models/product');

function productIndex(req, res, next) {
  Product
    .find()
    .exec()
    .then(products => res.json(products))
    .catch(next);
}

function productShow(req, res, next) {
  Product
    .findById(req.params.id)
    .populate('product')
    .exec()
    .then((product) => {
      res.json(product);
    })
    .catch(next);
}

module.exports = {
  index: productIndex,
  show: productShow
};
