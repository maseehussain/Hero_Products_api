const router = require('express').Router();
const products = require('../controllers/products');

router.route('/products')
  .get(products.index);

router.route('/products/:id')
  .get(products.show);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
