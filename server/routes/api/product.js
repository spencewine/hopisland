const express = require('express');
const router = express.Router();
const Product = require('../../models/product');
const Review = require('../../models/review');
const Orders = require('../../models/orders');
const Buyers = require('../../models/buyers');


router.get('/', (req, res, next) => {
  return Product.findAll()
    .then(products => {
      res.json(products);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  Product.create(req.body)
    .then(product => res.json(product))
    .catch(next);
});

router.get('/:productId', (req, res, next) => {
  const productId = req.params.productId;
  return Product.findById(productId)
    .then(product => {
      res.json(product);
    })
    .catch(next);
});


/*get all products of user */
router.get('/buyers/:buyerId', (req, res, next) => {
  Product.findAll({
    where: {buyerId: req.params.userId}
  })
    .then(products => {
      res.json(products);
    })
    .catch(next);
});

/* delete a product */
router.delete('/:productId', (req, res, next) => {
  Product.update({
    active: false},
    {where: { id: req.params.productId}
    })
    .then(product => {
      res.json(product);
    })
    .catch(next);
});


router.get('/:productId/reviews', (req, res, next) => {
  const productId = req.params.productId;
  return Orders.findAll({
    where: {
      product_id: productId},
    include: [ {model: Review}, {model: Buyers} ]
  })
    .then(order => {
      res.json(order);
    })
    .catch(next);
});


module.exports = router;
