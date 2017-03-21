const express = require('express');
const Router = express.Router;
const router = new Router();
const {Orders} = require('../../models');

router.get('/', (req, res, next) => {
  return Orders.findAll()
    .then(orders => res.send(orders))
    .catch(next);
});

module.exports = router;
