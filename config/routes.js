const router = require('express').Router();
const products = require('../controllers/products');
const merchants = require('../controllers/merchants');

router.route('/products')
  .get(products.index);

router.route('/products/:id')
  .get(products.show);

router.route('/merchants')
  .get(merchants.index);

router.route('/merchants/:id')
  .get(merchants.show);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
