const express = require('express');
const Router = express.Router;
const router = new Router();
const {Reviews} = require('../../models');

router.get('/', (req, res, next) => {
  return Reviews.findAll()
    .then(reviews => res.send(reviews))
    .catch(next);
});

module.exports = router;
