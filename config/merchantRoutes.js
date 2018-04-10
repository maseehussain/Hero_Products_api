const router = require('express').Router();
const merchants = require('../controllers/merchants');

router.route('/merchants')
  .get(merchants.index);

router.route('/merchants/:id')
  .get(merchants.show);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
