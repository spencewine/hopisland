const express = require('express');
const Router = express.Router;
const router = new Router();
const {Buyers} = require('../../models');


router.get('/', (req, res, next) => {
  return Buyers.findAll()
    .then(buyers => res.send(buyers))
    .catch(next);
});

module.exports = router;
