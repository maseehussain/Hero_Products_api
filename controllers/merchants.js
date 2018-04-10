const Merchant = require('../models/merchant');
const Product = require('../models/product');

function merchantsIndex(req, res) {
  Merchant
    .find()
    .exec()
    .then(merchants => res.status(200).json(merchants))
    .catch(() => res.status(500).json({ message: 'Something went wrong.' }));
}

function merchantShow(req, res, next) {
  Merchant
    .findById(req.params.id)
    .exec()
    .then((merchant) => {
      res.json(merchant);
    })
    .catch(next);
}

module.exports = {
  index: merchantsIndex,
  show: merchantShow
};
